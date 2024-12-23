import { Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconCloseSquare, IconVideo, IconVolume } from "@/components/icons";

const { width } = Dimensions.get("screen");

export default function VoiceCallScreen() {
  return (
    <SafeAreaView className="h-full p-6 bg-white justify-between">
      <View />
      <View className="items-center gap-6">
        <Image
          className="aspect-square rounded-full"
          source={{ uri: "https://i.pravatar.cc/600" }}
          width={width / 2}
        />
        <Text className="text-3xl  font-semibold">Annette Black</Text>
        <Text>04:26 minutes</Text>
      </View>
      <View className="flex-row gap-6 justify-center">
        <IconCloseSquare />
        <IconVideo />
        <IconVolume />
      </View>
    </SafeAreaView>
  );
}
