import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M5 8h14V5H5v3Zm9 11v-9H5v9h9Zm2 0h3v-9h-3v9ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
  </Svg>
);
export default SvgLayoutLine;
