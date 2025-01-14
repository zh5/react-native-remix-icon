import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgForbidLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.523 7.109l8.368 8.368a6.037 6.037 0 0 1-1.414 1.414L7.109 8.523A6.04 6.04 0 0 1 8.523 7.11Z" />
  </Svg>
);
export default SvgForbidLine;
