import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCurrencyLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M17.005 16.003h2v-12h-10v2h8v10Zm0 2v3c0 .552-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-14c0-.552.45-1 1.007-1h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z" />
  </Svg>
);
export default SvgCurrencyLine;
