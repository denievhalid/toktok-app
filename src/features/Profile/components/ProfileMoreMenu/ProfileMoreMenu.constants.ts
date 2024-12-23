import {
  IconBookmark,
  IconCurvedArrowBottom,
  IconCurvedScan,
  IconCurvedTimeSquare,
  IconHeart,
  IconInfo,
  IconSettings,
} from "@/components/icons";

export const profileMenu = [
  {
    icon: IconSettings,
    link: "/(account)/settings",
    title: "Settings",
  },
  {
    icon: IconCurvedArrowBottom,
    link: "",
    title: "Archive",
  },
  {
    icon: IconCurvedTimeSquare,
    link: "",
    title: "Your Activity",
  },
  {
    icon: IconCurvedScan,
    link: "",
    title: "QR Code",
  },
  {
    icon: IconBookmark,
    link: "",
    title: "Saved",
  },
  {
    icon: IconHeart,
    link: "",
    title: "Favorites",
  },
  {
    icon: IconInfo,
    link: "",
    title: "Information Center",
  },
];
