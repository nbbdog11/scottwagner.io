import React from 'react';
import { Link } from 'gatsby';
import MenuButton from '../navigation/MenuButton';
import NavigationOverlay from '../navigation/NavigationOverlay';
import headshot from '../../../images/headshot.jpg';
import '../../styles/navigation.css';

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
    return (
      <div className="header-bar">
        <Link to="/">
          <img src={headshot} className="headshot" alt="headshot" />
        </Link>
        <MenuButton onOpen={this.handleOpen} />
        { this.state.navOpen && <NavigationOverlay onClose={this.handleClose} /> }
      </div>
    );
  }
}

export default HeaderBar;
