import Svg, { Circle, Path } from "react-native-svg";
import type { IconProps } from "@/components/icons/types";

export const IconShorts = ({
  fill = "none",
  stroke = "currentColor",
}: IconProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      clipRule="evenodd"
      d="M12.5 2.5c5.246 0 9.5 4.253 9.5 9.5s-4.254 9.5-9.5 9.5A9.5 9.5 0 013 12a9.5 9.5 0 019.5-9.5z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M15.5 11.995c0-.811-4.158-3.406-4.63-2.94-.47.467-.516 5.369 0 5.88.518.512 4.63-2.129 4.63-2.94z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
