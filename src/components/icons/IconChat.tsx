import Svg, { Path } from "react-native-svg";
import type { IconProps } from "@/components/icons/types";

export const IconChat = ({
  fill = "none",
  size = 28,
  stroke = "currentColor",
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.596 14.482h.01M13.919 14.482h.01M9.242 14.482h.01"
      stroke="#212121"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M22.25 22.248c-3.565 3.566-8.845 4.337-13.166 2.338-.638-.256-4.766.887-5.662-.008-.896-.896.249-5.024-.008-5.662-1.999-4.32-1.228-9.603 2.338-13.168 4.551-4.553 11.946-4.553 16.498 0 4.56 4.56 4.551 11.948 0 16.5z"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
