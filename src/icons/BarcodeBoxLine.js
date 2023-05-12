import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeBoxLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 5v14h16V5H4ZM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 4h3v10H6V7Zm4 0h2v10h-2V7Zm3 0h1v10h-1V7Zm2 0h3v10h-3V7Z" />
  </Svg>
);
export default SvgBarcodeBoxLine;
