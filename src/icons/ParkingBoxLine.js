import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParkingBoxLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h14V5H5Zm4 2h3.5a3.5 3.5 0 1 1 0 7H11v3H9V7Zm2 2v3h1.5a1.5 1.5 0 0 0 0-3H11Z" />
  </Svg>
);
export default SvgParkingBoxLine;
