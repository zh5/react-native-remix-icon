import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDossierLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2h10ZM7 6H5v14h14V6h-2v2H7V6Zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2Zm2-7H9v2h6V4Z" />
  </Svg>
);
export default SvgDossierLine;
