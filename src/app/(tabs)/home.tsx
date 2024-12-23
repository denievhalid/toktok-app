import { ScrollView, Text, View } from "react-native";
import { IconChat, IconHeart, IconLogo } from "@/components/icons";
import { Stories } from "@/components/Stories/Stories";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { PostList } from "@/features/Post";

const data = [
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
];

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
