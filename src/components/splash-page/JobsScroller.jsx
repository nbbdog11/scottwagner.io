import React from 'react';
import Flip from 'react-reveal/Flip';

const jobs = [
  'Software Developer',
  'Coffee Hobbyist',
  'Drummer',
  'Modern Agile Believer',
  'Villanovan',
  'Philly Suburbanite',
  'Learner',
  'Occassional Gym-Goer',
  'Board Gamer',
];

class JobsScroller extends React.Component {
  state = {
    index: 0,
  }

  componentWillMount() {
    this.interval = setInterval(this.cycleJob, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  cycleJob = () => {
    const currentlyOnLastElement = this.state.index === jobs.length - 1;
    const newIndex = currentlyOnLastElement ? 0 : this.state.index + 1;
    this.setState({
      index: newIndex,
    });
  };

  render() {
    const style = {
      textAlign: 'center',
    };

    return (
      <Flip bottom cascade spy={this.state.index}>
        <h3 style={style}>
          {jobs[this.state.index]}
        </h3>
      </Flip>
    );
  }
}

export default JobsScroller;
