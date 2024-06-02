import Lottie from "lottie-react";
import * as React from "react";
import animation from "../../../public/animation/animation.json";

interface IAnimationProps {}

const Animation: React.FunctionComponent<IAnimationProps> = (props) => {
  return <Lottie animationData={animation} loop={true} />;
};

export default Animation;
