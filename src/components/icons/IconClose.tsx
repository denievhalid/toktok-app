import Svg, { Path } from "react-native-svg";

export const IconClose = () => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.793 11.195l-5.59 5.591M16.8 16.793l-5.6-5.6"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M3.208 14c0 8.094 2.699 10.792 10.792 10.792s10.792-2.698 10.792-10.791c0-8.094-2.699-10.792-10.792-10.792S3.208 5.907 3.208 14.001z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
