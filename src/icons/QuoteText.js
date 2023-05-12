import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQuoteText = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M21 4H3v2h18V4Zm0 7H8v2h13v-2Zm0 7H8v2h13v-2ZM5 11H3v9h2v-9Z" />
  </Svg>
);
export default SvgQuoteText;
