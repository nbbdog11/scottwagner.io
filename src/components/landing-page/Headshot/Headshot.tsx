import { FC } from "react";
import styled from "styled-components";
import RelativeImage from "../RelativeImage";

type HeadshotProps = {
  className?: string;
};

const Headshot: FC<HeadshotProps> = ({ className }) => (
  <RelativeImage
    src="/headshot.jpg"
    alt="headshot"
    className={className}
    layout="fill"
  />
);

export default styled(Headshot)`
  margin: auto;
  display: block;
  border-radius: 100%;
`;
