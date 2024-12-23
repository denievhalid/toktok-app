import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { safeAreaClasses } from "./SafeArea.constants";
import type { SafeAreaProps } from "./SafeArea.types";

export const SafeArea = ({
  bottom,
  children,
  className,
  transparent,
}: SafeAreaProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={safeAreaClasses({ className, transparent })}
      style={{
        paddingTop: insets.top,
        paddingBottom: bottom ? insets.bottom : undefined,
      }}
    >
      {children}
    </View>
  );
};
