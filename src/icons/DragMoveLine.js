import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragMoveLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m12 2 4.243 4.243-1.415 1.414L12 4.828 9.172 7.657 7.757 6.243 12 2ZM2 12l4.243-4.243 1.414 1.415L4.828 12l2.829 2.828-1.414 1.415L2 12Zm20 0-4.243 4.243-1.414-1.415L19.172 12l-2.829-2.828 1.414-1.415L22 12Zm-10 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8-4.243-4.243 1.415-1.414L12 19.172l2.828-2.829 1.415 1.414L12 22Z" />
  </Svg>
);
export default SvgDragMoveLine;
