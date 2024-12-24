import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import {
  IconBookmark,
  IconChat,
  IconHeart,
  IconMore,
  IconSend,
} from "@/components/icons";
import { useQuery } from "@tanstack/react-query";
import { fetchGetPosts } from "@/features/Post/services";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("screen");

export const PostList = () => {
  const router = useRouter();

  const { data, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchGetPosts,
  });

  if (isFetching) {
    return null;
  }

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
            <Pressable
              className="flex-row gap-4"
              onPress={() => router.push("/(user)/323")}
            >
              <Image
                className="rounded-full"
                source={{ uri: "https://i.pravatar.cc/48" }}
                width={48}
                height={48}
              />
              <View>
                <Text className="font-urbanist-bold text-base leading-8">
                  {item.user?.login}
                </Text>
                <Text className="text-[#616161] font-urbanist-medium text-xs leading-3">
                  {item.user?.description}
                </Text>
              </View>
            </Pressable>
            <View>
              <IconMore />
            </View>
          </View>
          <Swiper
            loop={false}
            pagingEnabled
            width={width - 48}
            height={width - 48}
            className="rounded-[32px]"
          >
            {item.files?.map((file) => (
              <Image
                key={file}
                className="rounded-[32px] aspect-square"
                file={file}
                source={{ uri: file }}
                width={width - 48}
              />
            ))}
          </Swiper>
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
