import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu-button.module.less';

const MenuButton = ({ onOpen }) => (
  <button
    className={styles.menuButton}
    onClick={onOpen}
  >
    MENU
  </button>
);

MenuButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MenuButton;
