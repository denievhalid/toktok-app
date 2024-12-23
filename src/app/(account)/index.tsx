import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { IconArrowLeft, IconMore } from "@/components/icons";

const { width } = Dimensions.get("screen");

export default function AccountDetailPage() {
  return (
    <SafeAreaView className="p-6">
      <View className="flex-row gap-4 justify-between items-center py-2">
        <View className="flex-row gap-4 items-center">
          <IconArrowLeft />
          <Text className="font-semibold text-2xl">julia_adaline</Text>
        </View>
        <IconMore />
      </View>
      <ScrollView className="h-full">
        <View className="items-center p-6 gap-6">
          <Image
            className="rounded-full"
            source={{ uri: "https://i.pravatar.cc/120" }}
            width={width / 3}
            height={width / 3}
          />
          <View className="gap-2">
            <Text className="text-center">Julia Adaline</Text>
            <Text className="text-center">Photographer</Text>
            <Text className="text-center text-[#424242]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Text>
            <Text className="text-center text-[#246BFD]">
              www.yourdomain.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
