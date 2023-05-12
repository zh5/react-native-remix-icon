import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M2 4h2v16H2V4Zm4 0h2v16H6V4Zm3 0h3v16H9V4Zm4 0h2v16h-2V4Zm3 0h2v16h-2V4Zm3 0h3v16h-3V4Z" />
  </Svg>
);
export default SvgBarcodeFill;
