import Svg, { Circle, Path } from "react-native-svg";
import type { IconProps } from "@/components/icons/types";

export const IconSearch = ({
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
    <Circle
      cx={12.2666}
      cy={11.7669}
      r={8.98856}
      stroke="#9E9E9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.518 18.485L22.042 22"
      stroke="#9E9E9E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
