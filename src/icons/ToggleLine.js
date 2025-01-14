import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToggleLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10H8Zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  </Svg>
);
export default SvgToggleLine;
