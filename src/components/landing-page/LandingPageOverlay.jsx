import React from 'react';
import Headshot from './Headshot';
import JobsScroller from './JobsScroller';
import SocialLinks from './SocialLinks';

const LandingPageOverlay = () => (
  <div className="landing-overlay">
    <div className="landing-overlay-content">
      <Headshot />
      <div className="name">Scott Wagner</div>
      <JobsScroller />
      <SocialLinks />
    </div>
  </div>
);

export default LandingPageOverlay;
