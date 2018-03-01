import React from 'react';
import SplashPageBackground from './SplashPageBackground';
import SplashPageOverlay from './SplashPageOverlay';

class SplashPage extends React.Component {
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
        <SplashPageBackground height={this.state.height} />
        <SplashPageOverlay />
      </div>
    );
  }
}

export default SplashPage;
