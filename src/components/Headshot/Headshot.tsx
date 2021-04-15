import styled from "styled-components";
import RelativeImage from "components/RelativeImage";

type HeadshotProps = {
  className?: string;
};

const Headshot = ({ className }: HeadshotProps) => (
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
