import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGridLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M14 10h-4v4h4v-4Zm2 0v4h3v-4h-3Zm-2 9v-3h-4v3h4Zm2 0h3v-3h-3v3ZM14 5h-4v3h4V5Zm2 0v3h3V5h-3Zm-8 5H5v4h3v-4Zm0 9v-3H5v3h3ZM8 5H5v3h3V5ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
  </Svg>
);
export default SvgGridLine;
