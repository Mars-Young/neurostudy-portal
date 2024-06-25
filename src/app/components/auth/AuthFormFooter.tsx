import Link from 'next/link';
import styles from './auth.module.css';
import ActionButton from '@/app/components/buttons/ActionButton';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import classNames from 'classnames';

type AuthFormFooterProps = {
  text?: string;
  toText?: string;
  to?: string;
};

const AuthFormFooter: React.FC<AuthFormFooterProps> = ({
  text = 'Already have an account? ',
  toText = 'Login',
  to = '/auth/login',
}: AuthFormFooterProps) => {
  return (
    <>
      <div className={styles.breakLineWrapper}>
        <hr className={styles.breakLine} />
        <span className={styles.or}>or</span>
        <hr className={styles.breakLine} />
      </div>
      <div className={styles.buttonArea}>
        <ActionButton
          type='button'
          label='Continue with Google'
          disabled
          style={BUTTON_STYLE.Secondary}
          fullWidth
          className={classNames(styles.secondaryBtn, 'mb-4')}
        />
      </div>
      <Typography
        variant={TypographyVariant.Body2}
        className={styles.callToAction}
      >
        {text}
        <Link href={to}>{toText}</Link>
      </Typography>
    </>
  );
};

export default AuthFormFooter;
