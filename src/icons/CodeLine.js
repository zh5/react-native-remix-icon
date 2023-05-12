import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCodeLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m23 12-7.071 7.07-1.414-1.413L20.172 12l-5.657-5.657 1.414-1.414L23 11.999ZM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12Z" />
  </Svg>
);
export default SvgCodeLine;
