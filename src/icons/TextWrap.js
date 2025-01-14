import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextWrap = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M15 18h1.5a2.5 2.5 0 0 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2ZM3 4h18v2H3V4Zm6 14v2H3v-2h6Z" />
  </Svg>
);
export default SvgTextWrap;
