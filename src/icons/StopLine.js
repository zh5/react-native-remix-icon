import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStopLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M7 7v10h10V7H7ZM6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  </Svg>
);
export default SvgStopLine;
