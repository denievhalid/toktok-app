import { Image, ImageBackground, Text, View } from "react-native";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { IconHeart, IconSend } from "@/components/icons";
import { Button } from "@/components/ui/Button/Button";

export default function ShortsPage() {
  return (
    <ImageBackground
      className="h-full w-full bg-dark-20"
      source={{ uri: "https://i.pravatar.cc/1200" }}
      resizeMode="cover"
    >
      <SafeArea transparent>
        <View className="p-6 justify-between flex-1">
          <View>
            <Text className="font-urbanist-bold text-2xl">Shorts</Text>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-row gap-5 items-center mt-auto">
              <Image
                className="aspect-square rounded-full"
                source={{ uri: "https://i.pravatar.cc/120" }}
                width={60}
                height={60}
              />
              <View className="flex-row gap-5">
                <View className="gap-1">
                  <Text className="font-urbanist-bold text-base text-white">
                    anny_wilson
                  </Text>
                  <Text className="text-white font-urbanist-medium text-xs">
                    Marketing Coordinator
                  </Text>
                </View>
                <Button rounded="lg" type="primary">
                  Follow
                </Button>
              </View>
            </View>
            <View className="gap-5">
              <View className="gap-2 items-center">
                <IconHeart />
                <Text className="font-urbanist-medium text-xs text-white">
                  12,267
                </Text>
              </View>
              <View className="gap-2 items-center">
                <IconSend />
                <Text className="font-urbanist-medium text-xs text-white">
                  9,287
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeArea>
    </ImageBackground>
  );
}
