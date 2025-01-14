import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFullscreenLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M8 3v2H4v4H2V3h6ZM2 21v-6h2v4h4v2H2Zm20 0h-6v-2h4v-4h2v6Zm0-12h-2V5h-4V3h6v6Z" />
  </Svg>
);
export default SvgFullscreenLine;
