import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckboxLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h14V5H5Zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.657-5.657 1.414 1.414L11.003 16Z" />
  </Svg>
);
export default SvgCheckboxLine;
