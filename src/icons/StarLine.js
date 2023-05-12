import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStarLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m12 18.26-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948Zm0-2.292 4.247 2.377-.948-4.773 3.573-3.305-4.833-.573-2.038-4.419-2.039 4.42-4.833.572 3.573 3.305-.948 4.773L12 15.968Z" />
  </Svg>
);
export default SvgStarLine;
