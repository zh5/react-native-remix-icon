import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHeading = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7h10Z" />
  </Svg>
);
export default SvgHeading;
