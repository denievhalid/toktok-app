import {
  IconHome,
  IconHomeFilled,
  IconPlay,
  IconPlayFilled,
  IconProfile,
  IconProfileFilled,
  IconSearch,
  IconSearchFilled,
  IconShorts,
} from "@/components/icons";
import { Fonts } from "@/constants";

export const bottomTabs = [
  {
    name: "index",
    title: "Home",
    icon: IconHome,
    activeIcon: IconHomeFilled,
  },
  {
    name: "search",
    title: "Search",
    icon: IconSearch,
    activeIcon: IconSearchFilled,
  },
  {
    name: "shorts",
    title: "Shorts",
    icon: IconPlay,
    activeIcon: IconPlayFilled,
  },
  {
    name: "profile",
    title: "Profile",
    icon: IconProfile,
    activeIcon: IconProfileFilled,
  },
];

export const tabBarLabelStyle = {
  fontFamily: Fonts.UrbanistBold,
  fontSize: 10,
  marginTop: 2,
};
