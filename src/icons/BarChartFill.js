import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 12h4v9H3v-9Zm14-4h4v13h-4V8Zm-7-6h4v19h-4V2Z" />
  </Svg>
);
export default SvgBarChartFill;
