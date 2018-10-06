import React from 'react';
import { Link } from 'gatsby';
import MenuButton from '../../navigation/MenuButton/MenuButton';
import NavigationOverlay from '../../navigation/NavigationOverlay/NavigationOverlay';
import headshot from '../../../../images/headshot.jpg';
import styles from './header-bar.module.less';

class HeaderBar extends React.Component {
  state = {
    navOpen: false,
  }

  handleOpen = () => {
    this.setState({
      navOpen: true,
    });
  }

  handleClose = () => {
    this.setState({
      navOpen: false,
    });
  }

  render() {
    const { navOpen } = this.state;
    return (
      <div className={styles.headerBar}>
        <Link to="/">
          <img src={headshot} className={styles.headshot} alt="headshot" />
        </Link>
        <MenuButton onOpen={this.handleOpen} />
        { navOpen && <NavigationOverlay onClose={this.handleClose} /> }
      </div>
    );
  }
}

export default HeaderBar;
