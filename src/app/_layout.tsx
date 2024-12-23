import { useEffect } from "react";
import { PortalProvider } from "@gorhom/portal";
import { SplashScreen, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Fonts } from "@/constants";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fwgvkzpuuzgtdndmaabx.supabase.co",
  "sbp_6032d7c77a80aae2210d2b88a2d4da292e472958",
);

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    [Fonts.UrbanistBold]: require("@/assets/fonts/Urbanist-Bold.ttf"),
    [Fonts.UrbanistMedium]: require("@/assets/fonts/Urbanist-Medium.ttf"),
    [Fonts.UrbanistRegular]: require("@/assets/fonts/Urbanist-Regular.ttf"),
    [Fonts.UrbanistSemibold]: require("@/assets/fonts/Urbanist-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <PortalProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(calls)" />
          <Stack.Screen
            name="story"
            options={{
              presentation: "containedModal",
            }}
          />
        </Stack>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
