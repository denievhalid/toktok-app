import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

export const IconVideo = () => (
  <Svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={80} height={80} rx={40} fill="url(#paint0_linear_549_6581)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.17 28.75h8.688c3.633 0 6.17 2.504 6.17 6.091V45.16c0 3.587-2.537 6.091-6.17 6.091H31.17c-3.634 0-6.17-2.504-6.17-6.091V34.84c0-3.587 2.537-6.091 6.17-6.091zm20.767 3.568a2.074 2.074 0 012.06.096A2.145 2.145 0 0155 34.244v11.513c0 .751-.375 1.435-1.004 1.83a2.098 2.098 0 01-1.114.324c-.323 0-.645-.077-.947-.23l-2.221-1.121a2.435 2.435 0 01-1.332-2.186v-8.75c0-.932.51-1.77 1.332-2.184l2.223-1.122z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_549_6581"
        x1={80}
        y1={80}
        x2={-15.1928}
        y2={52.3997}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FACC15" />
        <Stop offset={1} stopColor="#FFE580" />
      </LinearGradient>
    </Defs>
  </Svg>
);
