import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartHorizontalLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 3v2H3V3h9Zm4 16v2H3v-2h13Zm6-8v2H3v-2h19Z" />
  </Svg>
);
export default SvgBarChartHorizontalLine;
