import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledNavigationOverlay = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  transition: all 0.5s ease;
  z-index: 2;
  opacity: 1;

  nav {
  text-align: center;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      align-items: center;
      flex: 1;
      line-height: 20vh;

      a {
        font-size: 1.5em;
        transition: all 0.5s ease;
        display: block;
        text-decoration: none;
        color: ${(props) => rgba(props.theme.colors.secondary, 0.6)};

        &:hover {
          color: ${(props) => props.theme.colors.secondary};
          transform: scale(1.1);

          &:before {
            visibility: visible;
            transform: scaleX(1);
          }
        }

        &:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 2px;
          bottom: 0;
          left: 25%;
          background: ${(props) => props.theme.colors.secondary};
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out 0s;
        }
      }
    }
  }
}

@media (min-width: 800px) {
  nav ul li a {
    font-size: 3em;
  }
}
`;

const OuterClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 85px;
  height: 85px;
  cursor: pointer;
`;

const Close = styled.a`
  position: fixed;
  top: 40px;
  right: 60px;
  color: ${(props) => props.theme.colors.secondary};
  z-index: 3;
  cursor: pointer;
  color: ${(props) => rgba(props.theme.colors.secondary, 0.5)};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const NavigationOverlay = ({ onClose }) => (
  <StyledNavigationOverlay>
    <OuterClose>
      <Close role="button" tabIndex={0} onKeyPress={onClose} onClick={onClose}>
        <i className="far fa-window-close fa-2x" />
      </Close>
    </OuterClose>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </StyledNavigationOverlay>
);

NavigationOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavigationOverlay;
