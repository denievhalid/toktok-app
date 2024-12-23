import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IconBookmark,
  IconChat,
  IconHeart,
  IconLogo,
  IconMore,
  IconSend,
} from "@/components/icons";
import { Link } from "expo-router";
import { Stories } from "@/components/Stories/Stories";
import { SafeArea } from "@/components/SafeArea/SafeArea";

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

          <FlatList
            data={data}
            contentContainerStyle={{
              gap: 24,
              marginHorizontal: 24,
            }}
            scrollEnabled={false}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View className="gap-4">
                <View className="flex-row gap-4 justify-between items-center">
                  <Pressable className="flex-row gap-4" href="/(account)">
                    <Image
                      className="rounded-full"
                      source={{ uri: "https://i.pravatar.cc/48" }}
                      width={48}
                      height={48}
                    />
                    <View>
                      <Text className="font-urbanist-bold text-base leading-8">
                        anny_wilson
                      </Text>
                      <Text className="text-[#616161] font-urbanist-medium text-xs leading-3">
                        Marketing Coordinator
                      </Text>
                    </View>
                  </Pressable>
                  <View>
                    <IconMore />
                  </View>
                </View>
                <View>
                  <Image
                    className="aspect-square rounded-[32px] w-full"
                    source={{ uri: "https://i.pravatar.cc/600" }}
                  />
                </View>
                <View className="flex-row gap-4 justify-between items-center px-3">
                  <View className="flex-row items-center gap-8">
                    <View className="flex-row items-center gap-2">
                      <IconHeart />
                      <Text className="font-urbanist-semibold text-sm">
                        44,389
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                      <IconChat />
                      <Text className="font-urbanist-semibold text-sm">
                        26,376
                      </Text>
                    </View>
                    <IconSend />
                  </View>
                  <IconBookmark />
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeArea>
  );
}
