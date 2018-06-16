import React from 'react';
import PropTypes from 'prop-types';
import LandingPage from '../components/landing-page/LandingPage';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import '../styles/main.css';

const Layout = ({ children, location }) => {
  if (location.pathname === '/') {
    return <LandingPage />;
  }
  return (
    <div>
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
