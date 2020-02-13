import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuButton = styled.button`
  display: inline-block;
  background-color: #ffffff;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-family: "Nunito Sans", sans-serif;
  padding: 0 1rem;
  vertical-align: middle;
  cursor: pointer;
  position: fixed;
  height: 30px;
  margin-top: 10px;

  @media (max-width: 799px) {
    right: 20px;
  }

  @media (min-width: 800px) {
    right: 50px;
  }
`;

const MenuButton = ({ onOpen }) => (
  <StyledMenuButton
    onClick={onOpen}
    type="button"
  >
    MENU
  </StyledMenuButton>
);

MenuButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MenuButton;
