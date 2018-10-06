import React from 'react';
import { Link } from 'gatsby';
import Headshot from '../Headshot/Headshot';
import JobsScroller from '../JobsScroller/JobsScroller';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './landing-page-overlay.module.less';

const LandingPageOverlay = () => (
  <div className={styles.landingOverlay}>
    <div className={styles.landingOverlayContent}>
      <Headshot />
      <Link to="about">
        <div className={styles.name}>Scott Wagner</div>
      </Link>
      <JobsScroller />
      <SocialLinks />
    </div>
  </div>
);

export default LandingPageOverlay;
