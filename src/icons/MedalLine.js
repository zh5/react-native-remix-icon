import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMedalLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 1.5 1.322 2.68 2.958.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.958-.43L12 10.5ZM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.05L13 1.999 18 2Zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001Z" />
  </Svg>
);
export default SvgMedalLine;
