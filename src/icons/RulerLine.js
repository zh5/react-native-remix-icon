import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRulerLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m6.343 14.728-2.828 2.828 3.535 3.536L20.485 7.657 16.95 4.12l-2.121 2.122 1.414 1.414-1.414 1.414-1.415-1.414-2.121 2.121 2.121 2.121L12 13.314 9.88 11.192l-2.122 2.122 1.415 1.414-1.415 1.414-1.414-1.414ZM17.657 2l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415L16.243 2a1 1 0 0 1 1.414 0Z" />
  </Svg>
);
export default SvgRulerLine;
