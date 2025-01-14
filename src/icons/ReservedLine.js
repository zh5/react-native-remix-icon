import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReservedLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7Zm-8-2h14V5H5v8Zm3-5h8v2H8V8Z" />
  </Svg>
);
export default SvgReservedLine;
