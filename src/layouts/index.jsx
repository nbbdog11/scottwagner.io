import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import '../styles/main.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <ContentContainer>
      {children}
    </ContentContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
