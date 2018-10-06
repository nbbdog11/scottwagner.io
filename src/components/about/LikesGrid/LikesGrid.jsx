import React from 'react';
import styles from './likes-grid.module.less';

const LikesGrid = () => (
  <div>
    <div>Things I Like:</div>
    <div className={styles.likesGrid}>
      <div>
        <div className={styles.likesColumnHeader}>
          Software
        </div>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>AWS</li>
          <li>Terraform</li>
          <li>XP</li>
        </ul>
      </div>
      <div>
        <div className={styles.likesColumnHeader}>
          Not-Software
        </div>
        <ul>
          <li>Coffee</li>
          <li>Vinyl</li>
          <li>Drumming</li>
          <li>Coffee</li>
          <li>Espresso</li>
        </ul>
      </div>
    </div>
  </div>
);

export default LikesGrid;
