import { Platform } from "react-native";

export const isIOSPlatform = (): boolean => {
  return Platform.OS === "ios";
};

export const isAndroidPlatform = (): boolean => {
  return Platform.OS === "android";
};
