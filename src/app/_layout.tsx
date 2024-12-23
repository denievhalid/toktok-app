import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PortalProvider } from "@gorhom/portal";
import { SplashScreen, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Fonts } from "@/constants";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
