import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFootprintLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path d="M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0V18Zm4.058-4 .045-.133C8.87 11.762 9 11.371 9 11c0-.75-.203-1.643-.528-2.273C8.23 8.257 8.06 8.12 8 8.12c-1.28 0-2.5 1.364-2.5 2.88 0 .959.075 1.773.227 2.758l.038.242h2.293ZM8 6.12c2 0 3 2.88 3 4.88 0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12Zm12.054 7.978-.217 1.231a2.75 2.75 0 1 1-5.416-.955l.216-1.23 5.417.954Zm-1.05-4.247c.165-.5.301-.894.303-.9.202-.658.361-1.302.485-2.007.263-1.493-.702-3.048-1.962-3.27-.059-.01-.25.095-.57.515-.43.565-.784 1.41-.915 2.147-.058.33-.049.404.27 2.263.045.255.082.486.116.717l.02.138 2.253.397Zm-.826-8.146c2.464.434 4.018 3.124 3.584 5.586-.434 2.462-1.187 3.853-1.36 4.838l-5.417-.955-.232-1.565c-.232-1.564-.55-2.635-.377-3.62.347-1.97 1.832-4.632 3.802-4.284Z" />
  </Svg>
);
export default SvgFootprintLine;
