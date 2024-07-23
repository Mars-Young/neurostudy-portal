// NOTE
// We're trying this variable to closely resemble AWS's `nextStep`
// variables possible values
// https://docs.amplify.aws/gen1/nextjs/build-a-backend/auth/enable-sign-up/
export enum FORM_STATE {
  INITIALIZED = 'INITIALIZED',
  CONFIRM_SIGN_UP = 'CONFIRM_SIGN_UP',
  COMPLETE_AUTO_SIGN_IN = 'COMPLETE_AUTO_SIGN_IN',
  DONE = 'DONE',
  CONFIRM_RESET_PASSWORD_WITH_CODE = 'CONFIRM_RESET_PASSWORD_WITH_CODE',
}

export const DEFAULT_RESEND_OTP_WAIT_TIME =
  process.env.NODE_ENV === 'development' ? 10 * 1000 : 60 * 1000;

export const INVALID_CREDENTIALS_MESSAGE = 'Incorrect username or password.';

export const DEFAULT_SESSION_AGE_IN_SECONDS = 2 * 24 * 60 * 60;
