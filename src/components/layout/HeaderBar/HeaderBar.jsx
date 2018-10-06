import React from 'react';
import { Link } from 'gatsby';
import MenuButton from '../../navigation/MenuButton';
import NavigationOverlay from '../../navigation/NavigationOverlay/NavigationOverlay';
import headshot from '../../../../images/headshot.jpg';
import './header-bar.less';

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
      <div className="header-bar">
        <Link to="/">
          <img src={headshot} className="headshot" alt="headshot" />
        </Link>
        <MenuButton onOpen={this.handleOpen} />
        { navOpen && <NavigationOverlay onClose={this.handleClose} /> }
      </div>
    );
  }
}

export default HeaderBar;
