import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7a2 2 0 104 0h7a1 1 0 011 1v16a1 1 0 01-1 1h-7a2 2 0 10-4 0zm-1.465-2A3.998 3.998 0 0112 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A3.998 3.998 0 0112 7a3.998 3.998 0 01-3.465-2H4v14h4.535zM6 8h2v8H6V8zm10 0h2v8h-2V8z" />
    </Svg>
  );
}

export default SvgCoupon4Line;