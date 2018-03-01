import React from 'react';
import LandingPageBackground from './LandingPageBackground';
import LandingPageOverlay from './LandingPageOverlay';

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
    return (
      <div style={{ position: 'relative' }}>
        <LandingPageBackground height={this.state.height} />
        <LandingPageOverlay />
      </div>
    );
  }
}

export default LandingPage;
