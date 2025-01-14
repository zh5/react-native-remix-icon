import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParagraph = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 6v15h-2v-5a6 6 0 0 1 0-12h10v2h-3v15h-2V6h-3Zm-2 0a4 4 0 1 0 0 8V6Z" />
  </Svg>
);
export default SvgParagraph;
