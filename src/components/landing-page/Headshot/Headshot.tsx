import React from "react";
import styled from "styled-components";
import headshot from "images/headshot.jpg";

type HeadshotProps = {
  className?: string;
};

const Headshot: React.FC<HeadshotProps> = ({ className }) => (
  <img src={headshot} alt="headshot" className={className} />
);

export default styled(Headshot)`
  margin: auto;
  display: block;
  border-radius: 100%;
`;
