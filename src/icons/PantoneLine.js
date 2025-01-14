import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPantoneLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m5.765 8-.295-.73a1 1 0 0 1 .553-1.302l9.271-3.746a1 1 0 0 1 1.302.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553l-.088-.218v.04H7a1 1 0 0 1-1-1v-.269l-3.35-1.353a1 1 0 0 1-.553-1.302L5.765 8Zm2.236 11h2.208l-2.208-5.467V19Zm-2-6.244-1.674 4.141 1.674.711v-4.852Zm1.698-5.309 4.87 12.054 7.417-2.997-4.87-12.054L7.7 7.447Zm2.978 2.033a1 1 0 1 1-.75-1.855 1 1 0 0 1 .75 1.855Z" />
  </Svg>
);
export default SvgPantoneLine;
