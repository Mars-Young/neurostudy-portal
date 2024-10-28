import Stripe from 'stripe';
import { consumeRateWithIp } from '@/app/utilities/api/rateLimiter';
import { NextRequest, NextResponse } from 'next/server';
import processCourseAPIError from '@/app/utilities/db/processCourseAPIError';
import { CourseCheckoutSession } from '@/app/interfaces/Course';
import { COURSE_CHECKOUT_CALLBACK_URL } from '@/app/utilities/course/constants';

const stripe = new Stripe(process.env.STRIPE_SECRET || '');

export async function POST(req: NextRequest): Promise<Response> {
  try {
    await consumeRateWithIp(req);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1QEjKiHtB9Msoek2Uzs9wE3e',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${COURSE_CHECKOUT_CALLBACK_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${COURSE_CHECKOUT_CALLBACK_URL}?status=canceled&session_id={CHECKOUT_SESSION_ID}`,
    });

    const data: CourseCheckoutSession = {
      url: session.url,
    };

    return NextResponse.json(data);
  } catch (ex) {
    return processCourseAPIError(ex);
  }
}
