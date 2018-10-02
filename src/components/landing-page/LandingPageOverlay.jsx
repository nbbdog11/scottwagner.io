import React from 'react';
import { Link } from 'gatsby';
import Headshot from './Headshot';
import JobsScroller from './JobsScroller';
import SocialLinks from './SocialLinks';

const LandingPageOverlay = () => (
  <div className="landing-overlay">
    <div className="landing-overlay-content">
      <Headshot />
      <Link to="about">
        <div className="name">Scott Wagner</div>
      </Link>
      <JobsScroller />
      <SocialLinks />
    </div>
  </div>
);

export default LandingPageOverlay;
