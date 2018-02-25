import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import '../styles/main.css';

const divStyle = {
  margin: '0 auto',
  maxWidth: '100%',
  height: '100%',
  padding: '1.25rem 1rem',
};

const Layout = ({ children }) => (
  <div style={divStyle}>
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
