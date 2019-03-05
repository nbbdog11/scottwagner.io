import React, { useState } from 'react';
import { Link } from 'gatsby';
import MenuButton from '../../navigation/MenuButton/MenuButton';
import NavigationOverlay from '../../navigation/NavigationOverlay/NavigationOverlay';
import headshot from '../../../../images/headshot.jpg';
import styles from './header-bar.module.less';

const HeaderBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.headerBar}>
      <Link to="/">
        <img src={headshot} className={styles.headshot} alt="headshot" />
      </Link>
      <MenuButton
        onOpen={() => {
          setNavOpen(true);
        }}
      />
      {navOpen && (
        <NavigationOverlay
          onClose={() => {
            setNavOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default HeaderBar;
