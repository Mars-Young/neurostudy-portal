'use client';
import React, { ReactEventHandler } from 'react';
import styles from './button.module.css';
import Image from 'next/image';
import { BUTTON_STYLE } from '@/app/utilities/constants';
import classNames from 'classnames';
import Link from 'next/link';

interface ActionButtonProps {
  label: string;
  icon?: string;
  style?: BUTTON_STYLE;
  disabled?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  to?: string;
  fullWidth?: boolean;
}

export default function ActionButton({
  label,
  icon,
  style,
  disabled,
  onClick,
  iconPosition = 'left',
  className,
  type,
  to,
  fullWidth,
}: ActionButtonProps) {
  const buttonStyles = classNames(styles.common, className, {
    [styles.primary]: style === BUTTON_STYLE.Primary,
    [styles.secondary]: style === BUTTON_STYLE.Secondary,
    [styles.tertiary]: style === BUTTON_STYLE.Tertiary,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  });

  const children = (
    <>
      {iconPosition === 'left' && icon && <Image src={icon} alt='icon' />}
      <span>{label}</span>
      {iconPosition === 'right' && icon && <Image src={icon} alt='icon' />}
    </>
  );

  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {to ? (
        <Link href={to} className={styles.a}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
