import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSeparator = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M2 11h2v2H2v-2Zm4 0h12v2H6v-2Zm14 0h2v2h-2v-2Z" />
  </Svg>
);
export default SvgSeparator;
