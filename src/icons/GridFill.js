import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGridFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M14 10v4h-4v-4h4Zm2 0h5v4h-5v-4Zm-2 11h-4v-5h4v5Zm2 0v-5h5v4a1 1 0 0 1-1 1h-4ZM14 3v5h-4V3h4Zm2 0h4a1 1 0 0 1 1 1v4h-5V3Zm-8 7v4H3v-4h5Zm0 11H4a1 1 0 0 1-1-1v-4h5v5ZM8 3v5H3V4a1 1 0 0 1 1-1h4Z" />
  </Svg>
);
export default SvgGridFill;
