import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCpuLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M6 18h12V6H6v12Zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2v-2ZM8 8h8v8H8V8Z" />
  </Svg>
);
export default SvgCpuLine;
