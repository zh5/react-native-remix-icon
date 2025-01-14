import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragDropLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="m16 13 6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13Zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6ZM4 14v2H2v-2h2Zm0-4v2H2v-2h2Zm0-4v2H2V6h2Zm0-4v2H2V2h2Zm4 0v2H6V2h2Zm4 0v2h-2V2h2Zm4 0v2h-2V2h2Z" />
  </Svg>
);
export default SvgDragDropLine;
