import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKeyboardBoxLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 5v14h16V5H4ZM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 4h2v2H6V7Zm0 4h2v2H6v-2Zm0 4h12v2H6v-2Zm5-4h2v2h-2v-2Zm0-4h2v2h-2V7Zm5 0h2v2h-2V7Zm0 4h2v2h-2v-2Z" />
  </Svg>
);
export default SvgKeyboardBoxLine;
