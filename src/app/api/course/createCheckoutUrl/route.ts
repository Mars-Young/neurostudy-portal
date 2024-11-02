import { consumeRateWithIp } from '@/app/utilities/api/rateLimiter';
import { NextRequest, NextResponse } from 'next/server';
import processCourseAPIError from '@/app/utilities/db/processCourseAPIError';
import { CourseCheckoutSession } from '@/app/interfaces/Course';
import {
  COURSE_CHECKOUT_CALLBACK_URL,
  COURSE_TEST_ENROL_KEY,
} from '@/app/utilities/course/constants';
import isAuthenticated from '@/app/utilities/auth/isAuthenticated';
import stripe from '@/app/utilities/stripe';
import { STRIPE_INTRO_PRODUCT_PRICE_ID } from '@/app/utilities/stripe/constants';

export async function POST(req: NextRequest): Promise<Response> {
  try {
    await consumeRateWithIp(req);

    const authResponse = await isAuthenticated({ req });

    let customer_email: string | undefined = undefined;
    if (!(authResponse instanceof Response)) {
      customer_email = authResponse.email;
    }

    const testParam = req.nextUrl.searchParams.has(COURSE_TEST_ENROL_KEY)
      ? `&${COURSE_TEST_ENROL_KEY}`
      : '';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: STRIPE_INTRO_PRODUCT_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      ...(customer_email && { customer_email }),
      success_url: `${COURSE_CHECKOUT_CALLBACK_URL}?session_id={CHECKOUT_SESSION_ID}${testParam}`,
      cancel_url: `${COURSE_CHECKOUT_CALLBACK_URL}?status=canceled&session_id={CHECKOUT_SESSION_ID}${testParam}`,
    });

    const data: CourseCheckoutSession = {
      url: session.url,
    };

    return NextResponse.json(data);
  } catch (ex) {
    return processCourseAPIError(ex);
  }
}