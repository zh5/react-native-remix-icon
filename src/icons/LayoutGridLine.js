import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutGridLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18ZM11 13H4v6h7v-6Zm9 0h-7v6h7v-6Zm-9-8H4v6h7V5Zm9 0h-7v6h7V5Z" />
  </Svg>
);
export default SvgLayoutGridLine;
