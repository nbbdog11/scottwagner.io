import React from 'react';
import Headshot from './Headshot';
import JobsScroller from './JobsScroller';
import SocialLinks from './SocialLinks';

const LandingPageOverlay = () => (
  <div className="landing-overlay">
    <div className="landing-overlay-content">
      <Headshot />
      <h1 className="text-centered">Scott Wagner</h1>
      <JobsScroller />
      <SocialLinks />
    </div>
  </div>
);

export default LandingPageOverlay;
