import React from 'react';
import LandingPageOverlay from '../LandingPageOverlay/LandingPageOverlay';
import styles from './landing-page.module.less';

const LandingPage = () => (
  <div className={styles.landingPageContainer}>
    <LandingPageOverlay />
  </div>
);

export default LandingPage;
