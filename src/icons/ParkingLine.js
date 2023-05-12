import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParkingLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M6 3h7a6 6 0 0 1 0 12H8v6H6V3Zm2 2v8h5a4 4 0 0 0 0-8H8Z" />
  </Svg>
);
export default SvgParkingLine;
