import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar/HeaderBar';
import styles from './layout.module.less';

const Layout = ({ children, title, subtitle }) => (
  <div>
    <HeaderBar />
    <div className={styles.layoutBackground} />
    <div className={styles.layoutMain}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Layout.defaultProps = {
  subtitle: null,
};

export default Layout;
