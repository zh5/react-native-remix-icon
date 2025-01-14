import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlideshowLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8Zm-9-2h16V8H4v11Zm9-9h5v2h-5v-2Zm0 4h5v2h-5v-2Zm-4-4v3h3a3 3 0 1 1-3-3ZM2 3h20v2H2V3Z" />
  </Svg>
);
export default SvgSlideshowLine;
