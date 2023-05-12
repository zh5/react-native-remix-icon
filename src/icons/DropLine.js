import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDropLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m12 3.097-4.95 4.95a7 7 0 1 0 9.9 0L12 3.097Zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .269Z" />
  </Svg>
);
export default SvgDropLine;
