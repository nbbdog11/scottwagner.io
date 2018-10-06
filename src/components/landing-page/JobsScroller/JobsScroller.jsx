import React from 'react';
import styles from './jobs-scroller.module.less';

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
    const { index } = this.state;
    const currentlyOnLastElement = index === jobs.length - 1;
    const newIndex = currentlyOnLastElement ? 0 : index + 1;
    this.setState({
      index: newIndex,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div className={styles.jobs}>
        {jobs[index]}
      </div>
    );
  }
}

export default JobsScroller;
