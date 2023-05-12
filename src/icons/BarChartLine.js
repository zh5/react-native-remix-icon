import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 12h2v9H3v-9Zm16-4h2v13h-2V8Zm-8-6h2v19h-2V2Z" />
  </Svg>
);
export default SvgBarChartLine;
