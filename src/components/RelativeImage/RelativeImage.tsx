import { ComponentProps } from "react";
import Image from "next/image";

type RelativeImageProps = ComponentProps<typeof Image>;

const RelativeImage = (props: RelativeImageProps) => {
  const propsForImage = {
    ...props,
    src: ["", "v1618467338", "scottwagnerio", props.src].join("/"),
  };
  return <Image {...propsForImage} />;
};

export default RelativeImage;
