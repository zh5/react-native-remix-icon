import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBankCardLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 8h-16v8h16v-8Zm0-2V5h-16v4h16Zm-6 6h4v2h-4v-2Z" />
  </Svg>
);
export default SvgBankCardLine;
