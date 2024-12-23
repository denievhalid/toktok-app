import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconMore } from "@/components/icons";

export default function StoryScreen() {
  return (
    <View className="w-full h-full bg-[#1A1B22]">
      <ImageBackground
        className="h-full w-full"
        source={{ uri: "https://i.pravatar.cc/1200" }}
        resizeMode="cover"
      >
        <SafeAreaView className="p-6 gap-6">
          <View className="flex-row gap-1">
            <View className="h-1 bg-[#FF4D67] rounded-2xl flex-1" />
            <View className="h-1 bg-[#F5F5F5] rounded-2xl flex-1" />
            <View className="h-1 bg-[#F5F5F5] rounded-2xl flex-1" />
            <View className="h-1 bg-[#F5F5F5] rounded-2xl flex-1" />
            <View className="h-1 bg-[#F5F5F5] rounded-2xl flex-1" />
          </View>
          <View className="flex-row gap-4 justify-between items-center">
            <Pressable
              className="items-center flex-row gap-4"
              href="/(account)"
            >
              <Image
                className="w-12 h-12 rounded-full"
                source={{ uri: "https://i.pravatar.cc/48" }}
              />
              <View className="gap-1">
                <Text className="font-semibold text-white">anny_wilson</Text>
                <Text className="text-white text-sm">1 hour ago</Text>
              </View>
            </Pressable>
            <View>
              <IconMore />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
