import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import HeaderLinksList from '../components/HeaderLinksList';
import ContentContainer from '../components/ContentContainer';
import background from '../images/background.png';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    height: window.innerHeight,
  }

  componentWillMount() {
    window.addEventListener('resize', this.setWindowSizeState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWindowSizeState);
  }

  setWindowSizeState = () => {
    this.setState({
      height: window.innerHeight,
    });
  }

  render() {
    const divStyle = {
      margin: '0 auto',
      maxWidth: '100%',
      minHeight: this.state.height,
      height: '100%',
      padding: '1.25rem 1rem',
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    return (
      <div style={divStyle}>
        <header style={{ marginBottom: '1.5rem' }}>
          <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
            <h3 style={{ display: 'inline', color: 'white' }}>Scott Wagner</h3>
          </Link>
          <HeaderLinksList />
        </header>
        <ContentContainer>
          {this.props.children}
        </ContentContainer>
      </div>
    );
  }
}

export default Layout;
