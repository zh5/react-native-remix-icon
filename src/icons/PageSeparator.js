import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPageSeparator = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-2ZM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3h2ZM2 9l4 3-4 3V9Zm20 0v6l-4-3 4-3Z" />
  </Svg>
);
export default SvgPageSeparator;
