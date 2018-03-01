import React from 'react';
import PropTypes from 'prop-types';
import SplashPage from '../components/splash-page/SplashPage';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import '../styles/main.css';

const Layout = ({ children, location }) => {
  if (location.pathname === '/') {
    return <SplashPage />;
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
