import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

export const IconCloseSquare = () => (
  <Svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={80} height={80} rx={40} fill="url(#paint0_linear_549_6579)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.505 24.999H46.51c5.085 0 8.49 3.57 8.49 8.88v12.257c0 5.294-3.405 8.863-8.49 8.863H33.505C28.42 54.999 25 51.43 25 46.135V33.88c0-5.31 3.42-8.88 8.505-8.88zm11.01 19.5c.51-.508.51-1.333 0-1.843l-2.67-2.67 2.67-2.672a1.32 1.32 0 000-1.858 1.32 1.32 0 00-1.86 0L40 38.124l-2.67-2.668a1.32 1.32 0 00-1.86 0 1.32 1.32 0 000 1.858l2.67 2.672-2.67 2.655a1.32 1.32 0 00.93 2.25c.345 0 .675-.137.93-.392L40 41.846l2.67 2.653c.255.272.585.392.915.392.345 0 .675-.137.93-.392z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_549_6579"
        x1={80}
        y1={80}
        x2={-15.1928}
        y2={52.3997}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF4D67" />
        <Stop offset={1} stopColor="#FF8A9B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
