import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const Jobs = styled.div`
  text-align: center;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.secondary};
`;

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

  return <Jobs>{jobs[index]}</Jobs>;
};

export default JobsScroller;
