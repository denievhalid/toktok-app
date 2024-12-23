import { FlatList, Image, Pressable, Text, View } from "react-native";
import {
  IconBookmark,
  IconChat,
  IconHeart,
  IconMore,
  IconSend,
} from "@/components/icons";
import { useQuery } from "@tanstack/react-query";
import { fetchGetPosts } from "@/features/Post/services";

export const PostList = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchGetPosts,
  });

  if (isFetching) {
    return null;
  }

  console.log(data);

  return (
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
                <Text className="font-urbanist-semibold text-sm">44,389</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <IconChat />
                <Text className="font-urbanist-semibold text-sm">26,376</Text>
              </View>
              <IconSend />
            </View>
            <IconBookmark />
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
