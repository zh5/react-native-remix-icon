import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragMoveFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m12 22-4-4h8l-4 4Zm0-20 4 4H8l4-4Zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM2 12l4-4v8l-4-4Zm20 0-4 4V8l4 4Z" />
  </Svg>
);
export default SvgDragMoveFill;
