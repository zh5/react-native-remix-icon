import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalculatorLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 2v16h14V4H5Zm2 2h10v4H7V6Zm0 6h2v2H7v-2Zm0 4h2v2H7v-2Zm4-4h2v2h-2v-2Zm0 4h2v2h-2v-2Zm4-4h2v6h-2v-6Z" />
  </Svg>
);
export default SvgCalculatorLine;
