import Svg, { Path } from "react-native-svg";

export const IconLock = () => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.216 10.971V8.464a5.321 5.321 0 00-10.641-.023v2.53M13.895 16.516v2.59"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M13.895 10.295c-6.702 0-8.936 1.83-8.936 7.316 0 5.488 2.234 7.317 8.936 7.317 6.703 0 8.938-1.829 8.938-7.317 0-5.487-2.235-7.316-8.938-7.316z"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
