import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTodoLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2Zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2ZM7 8h10v2H7V8Zm0 4h10v2H7v-2Z" />
  </Svg>
);
export default SvgTodoLine;
