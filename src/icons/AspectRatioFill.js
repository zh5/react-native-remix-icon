import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAspectRatioFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18Zm-3 9h-2v3h-3v2h5v-5Zm-7-5H6v5h2V9h3V7Z" />
  </Svg>
);
export default SvgAspectRatioFill;
