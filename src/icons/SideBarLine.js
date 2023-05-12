import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSideBarLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 2H4v14h4V5Zm2 0v14h10V5H10Z" />
  </Svg>
);
export default SvgSideBarLine;
