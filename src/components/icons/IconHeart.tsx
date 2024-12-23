import Svg, { Path } from "react-native-svg";
import type { IconProps } from "@/components/icons/types";

export const IconHeart = () => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      clipRule="evenodd"
      d="M3.409 14.52c-1.252-3.907.212-8.767 4.315-10.087 2.159-.697 4.822-.116 6.335 1.971 1.427-2.164 4.168-2.663 6.324-1.971 4.102 1.32 5.574 6.18 4.323 10.088-1.948 6.195-8.746 9.422-10.647 9.422-1.899 0-8.636-3.155-10.65-9.422z"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.42 8.825c1.408.144 2.289 1.26 2.236 2.825"
      stroke="#212121"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
