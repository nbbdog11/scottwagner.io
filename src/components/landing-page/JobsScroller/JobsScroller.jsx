import React, { useState, useEffect } from 'react';
import styles from './jobs-scroller.module.less';

const jobs = [
  'Software Developer',
  'Coffee Hobbyist',
  'Drummer',
  'Modern Agile Believer',
  'Villanova Alum',
  'Philly Resident',
  'Former Long Islander',
  'Learner',
  'Occassional Gym-Goer',
  'Board Gamer',
];

const JobsScroller = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentlyOnLastElement = index === jobs.length - 1;
      const newIndex = currentlyOnLastElement ? 0 : index + 1;
      setIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return <div className={styles.jobs}>{jobs[index]}</div>;
};

export default JobsScroller;
