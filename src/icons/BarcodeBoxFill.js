import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeBoxFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 4v10h3V7H6Zm4 0v10h2V7h-2Zm3 0v10h1V7h-1Zm2 0v10h3V7h-3Z" />
  </Svg>
);
export default SvgBarcodeBoxFill;
