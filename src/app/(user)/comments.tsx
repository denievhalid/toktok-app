import { SafeArea } from "@/components/SafeArea/SafeArea";
import {
  IconArrowLeft,
  IconBookmark,
  IconChat,
  IconHeart,
  IconMore,
  IconSend,
} from "@/components/icons";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "@/components/ui/Divider/Divider";

export default function CommentsScreen() {
  return (
    <SafeArea>
      <View className="flex-row gap-4 items-center px-6 pb-2 justify-between">
        <View className="items-center flex-row gap-4">
          <IconArrowLeft />
          <Text className="font-urbanist-bold text-2xl">Comments</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <IconSend />
        </TouchableOpacity>
      </View>
      <View className="flex-1 px-6">
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={[
              { id: "1" },
              { id: "2" },
              { id: "3" },
              { id: "4" },
              { id: "5" },
              { id: "6" },
              { id: "7" },
              { id: "8" },
              { id: "9" },
              { id: "10" },
              { id: "11" },
              { id: "12" },
              { id: "13" },
              { id: "14" },
              { id: "15" },
              { id: "16" },
              { id: "17" },
              { id: "18" },
            ]}
            contentContainerStyle={{
              gap: 24,
              marginBottom: 24,
            }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View className="gap-3">
                <View className="flex-row gap-4 justify-between items-center">
                  <Pressable className="flex-row gap-4">
                    <Image
                      className="rounded-full"
                      source={{ uri: "https://i.pravatar.cc/120" }}
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
                <Text className="font-urbanist-regular text-sm text-greyscale-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. #girl #girls
                </Text>
                <View className="flex-row gap-4 justify-between items-center">
                  <View className="flex-row items-center gap-6">
                    <View className="flex-row items-center gap-2">
                      <IconHeart />
                      <Text className="font-urbanist-semibold text-sm">
                        44,389
                      </Text>
                    </View>
                    <Text className="font-urbanist-semibold text-greyscale-700 text-xs">
                      Reply
                    </Text>
                    <Text className="font-urbanist-semibold text-greyscale-700 text-xs">
                      6 hours ago
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </SafeArea>
  );
}
