import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMessageLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V5H4v13.385L5.763 17ZM8 10h8v2H8v-2Z" />
  </Svg>
);
export default SvgMessageLine;
