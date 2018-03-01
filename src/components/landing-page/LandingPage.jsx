import React from 'react';
import LandingPageOverlay from './LandingPageOverlay';
import background from '../../../images/background.jpg';

class LandingPage extends React.Component {
  state = {
    height: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWindowSizeState);
    this.setWindowSizeState();
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
    const style = {
      margin: '0 auto',
      maxWidth: '100%',
      minHeight: this.state.height,
      height: '100%',
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    return (
      <div style={style}>
        <LandingPageOverlay />
      </div>
    );
  }
}

export default LandingPage;
