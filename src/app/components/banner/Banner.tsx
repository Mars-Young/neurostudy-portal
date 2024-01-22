import React from 'react';
import styles from './banner.module.css';
import Typography, { TypographyVariant } from '../typography/Typography';
import BadgeDisplay from '../badges/BadgeDisplay';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textHeader}>
          <Typography variant={TypographyVariant.H1} color='var(--GhostWhite)'>
            We endorse the future
          </Typography>
        </div>
        <div className={styles.textBody}>
          <Typography variant={TypographyVariant.H2} color='var(--GhostWhite)'>
            Elevating Neurodiversity by guiding individuals to teach and learn
            effectively
          </Typography>
        </div>
      </div>
      <div>
        <BadgeDisplay></BadgeDisplay>
      </div>
    </div>
  );
}
