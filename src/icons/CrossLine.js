import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCrossLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5V2Zm2 2v5H6v2h5v9h2v-9h5V9h-5V4h-2Z" />
  </Svg>
);
export default SvgCrossLine;
