import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShapeFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM9 4h6v2H9V4Zm0 14h6v2H9v-2ZM4 9h2v6H4V9Zm14 0h2v6h-2V9Z" />
  </Svg>
);
export default SvgShapeFill;
