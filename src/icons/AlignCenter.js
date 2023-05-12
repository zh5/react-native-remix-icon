import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignCenter = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 4h18v2H3V4Zm2 15h14v2H5v-2Zm-2-5h18v2H3v-2Zm2-5h14v2H5V9Z" />
  </Svg>
);
export default SvgAlignCenter;
