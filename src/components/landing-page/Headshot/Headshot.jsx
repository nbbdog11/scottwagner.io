import React from 'react';
import { Link } from 'gatsby';
import headshot from '../../../../images/headshot.jpg';
import styles from './headshot.module.less';

const Headshot = () => (
  <Link to="about">
    <img src={headshot} className={styles.headshot} alt="headshot" />
  </Link>
);

export default Headshot;
