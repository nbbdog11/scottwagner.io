import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ onOpen }) => (
  <button
    className="menu-button"
    onClick={onOpen}
  >
    MENU
  </button>
);

MenuButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MenuButton;
