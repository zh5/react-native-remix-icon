import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnderline = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3h2ZM4 20h16v2H4v-2Z" />
  </Svg>
);
export default SvgUnderline;
