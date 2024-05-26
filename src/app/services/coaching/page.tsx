'use client';
import React from 'react';
import styles from './page.module.css';
import Typography, {
  TypographyVariant,
} from '@/app/components/typography/Typography';
import ActionButton from '@/app/components/buttons/ActionButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const navigateToContactUs = () => {
    router.push(`/contact`);
  };
  return (
    <div className={styles.container}>
      <title>Career Coaching</title>
      <meta
        name='keywords'
        content='homepage, neurodiversity, neurodiversityacademy, neurodiversity academy, neurodivergent mates, neurodivergentmates, Neurodiversity Coaching & Placements, Neurodiversity Coaching, Career coaching'
      ></meta>
      <meta
        name='description'
        content={'Neurodiversity Career Coaching from Neurodiversity Academy'}
      ></meta>
      <div className={styles.title}>
        <Typography variant={TypographyVariant.H1} color='var(--BondBlack)'>
          Career Coaching
        </Typography>
      </div>
      <div className={styles.bodyText}>
        <ul className={styles.serviceDescriptionList}>
          <li>
            <Typography
              variant={TypographyVariant.Body1}
              color='var(--BondBlack)'
            >
              Give supportive advice on different pathways to take as a
              neurodivergent person to achieve career success or growth
              opportunities in the competitive world
            </Typography>
          </li>
        </ul>
      </div>
      <ActionButton
        label='Contact us'
        disabled={false}
        className={styles.accessButton}
        onClick={() => navigateToContactUs()}
      />
    </div>
  );
}
