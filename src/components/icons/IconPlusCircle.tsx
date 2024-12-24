import Svg, { Path } from "react-native-svg";
import * as React from "react";

export const IconPlusCircle = () => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M14.043 9.873v8.34M18.217 14.044H9.87"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M2.683 14.043c0-8.519 2.84-11.36 11.36-11.36s11.36 2.841 11.36 11.36c0 8.52-2.84 11.36-11.36 11.36s-11.36-2.84-11.36-11.36z"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
