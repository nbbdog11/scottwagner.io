import React from 'react';
import Headshot from './Headshot';
import JobsScroller from './JobsScroller';
import SocialLinks from './SocialLinks';

const overlayStyle = {
  position: 'absolute',
  zIndex: 1,
  color: 'white',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'grid',
};

const overlayContentStyle = {
  margin: 'auto',
};

const headingStyle = {
  textAlign: 'center',
};

const LandingPageOverlay = () => (
  <div style={overlayStyle}>
    <div style={overlayContentStyle}>
      <Headshot />
      <h1 style={headingStyle}>Scott Wagner</h1>
      <JobsScroller />
      <SocialLinks />
    </div>
  </div>
);

export default LandingPageOverlay;
