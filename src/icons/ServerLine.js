import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgServerLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M5 11h14V5H5v6Zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-2 9H5v6h14v-6ZM7 15h3v2H7v-2Zm0-8h3v2H7V7Z" />
  </Svg>
);
export default SvgServerLine;
