import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDraftLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M20 2a1 1 0 0 1 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16Zm1.778 6.808 1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778ZM13 12v2H8v-2h5Zm3-4v2H8V8h8Z" />
  </Svg>
);
export default SvgDraftLine;
