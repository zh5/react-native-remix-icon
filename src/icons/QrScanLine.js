import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQrScanLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 16v5H3v-5h2v3h14v-3h2ZM3 11h18v2H3v-2Zm18-3h-2V5H5v3H3V3h18v5Z" />
  </Svg>
);
export default SvgQrScanLine;
