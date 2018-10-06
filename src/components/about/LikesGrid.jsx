import React from 'react';
import '../../styles/likes-grid.less';

const LikesGrid = () => (
  <div>
    <div>Things I Like:</div>
    <div className="likes-grid">
      <div>
        <div className="likes-column-header">
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
        <div className="likes-column-header">
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
