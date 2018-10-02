import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavigationOverlay = ({ onClose }) => (
  <aside>
    <div className="outer-close toggle-overlay">
      <a
        className="close"
        role="button"
        tabIndex={0}
        onKeyPress={onClose}
        onClick={onClose}
      >
        <i className="far fa-window-close fa-2x" />
      </a>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  </aside>
);

NavigationOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavigationOverlay;
