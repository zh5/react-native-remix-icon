import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAspectRatioLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm-1 2H4v14h16V5Zm-7 12v-2h3v-3h2v5h-5ZM11 7v2H8v3H6V7h5Z" />
  </Svg>
);
export default SvgAspectRatioLine;
