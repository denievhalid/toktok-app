import { ScrollView, Text, View } from "react-native";
import { IconChat, IconHeart, IconLogo } from "@/components/icons";
import { Stories } from "@/components/Stories/Stories";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { PostList } from "@/features/Post";

export default function IndexPage() {
  return (
    <SafeArea className="gap-2">
      <View className="flex-row justify-between items-center px-6">
        <View className="flex-row gap-4 items-center">
          <IconLogo />
          <Text className="font-urbanist-bold text-2xl">TokTok</Text>
        </View>
        <View className="flex-row gap-5 items-center">
          <IconHeart />
          <IconChat />
        </View>
      </View>

      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Stories />
          <PostList />
        </ScrollView>
      </View>
    </SafeArea>
  );
}
