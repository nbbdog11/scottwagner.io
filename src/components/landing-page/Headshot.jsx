import React from 'react';
import headshot from '../../../images/headshot.jpg';

const style = {
  margin: 'auto',
  display: 'block',
  borderRadius: '100%',
};

const Headshot = () => (
  <img src={headshot} style={style} alt="headshot" />
);

export default Headshot;
