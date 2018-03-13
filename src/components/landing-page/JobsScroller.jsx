import React from 'react';

const jobs = [
  'Software Developer',
  'Coffee Hobbyist',
  'Drummer',
  'Modern Agile Believer',
  'Villanova Alum',
  'Philly Suburbanite',
  'Former Long Islander',
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
    return (
      <div className="jobs">
        {jobs[this.state.index]}
      </div>
    );
  }
}

export default JobsScroller;
