import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPolaroidLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 6h-2V5H5v14h14v-1h2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2ZM6 6h2v3H6V6Zm9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
  </Svg>
);
export default SvgPolaroidLine;
