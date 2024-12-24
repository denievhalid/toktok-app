import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  IconAddUser,
  IconCamera,
  IconChatFilled,
  IconEdit,
  IconFeeds,
  IconLogo,
  IconPlusCircle,
  IconUsers,
} from "@/components/icons";
import { Stories } from "@/components/Stories/Stories";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { Button } from "@/components/ui/Button/Button";
import { ProfileMoreMenu } from "@/features/Profile";

const { width } = Dimensions.get("screen");

export default function ProfilePage() {
  return (
    <>
      <SafeArea>
        <View className="flex-row gap-4 justify-between items-center px-6">
          <View className="flex-row gap-4 items-center">
            <IconLogo />
            <Text className="font-urbanist-bold text-2xl">john_doe</Text>
          </View>
          <View className="flex-row gap-5">
            <IconPlusCircle />
            <IconEdit />
            <ProfileMoreMenu />
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
            <View className="items-center gap-6 px-6">
              <Image
                className="rounded-full"
                source={{ uri: "https://i.pravatar.cc/220" }}
                width={width / 3}
                height={width / 3}
              />
              <View className="gap-2">
                <Text className="text-center font-urbanist-bold text-3xl">
                  John Doe
                </Text>
                <Text className="text-center font-urbanist-semibold">
                  Photographer
                </Text>
                <Text className="text-center text-sm text-[#424242] font-urbanist-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </Text>
                <Text className="text-center text-sm font-urbanist-bold text-[#246BFD]">
                  www.yourdomain.com
                </Text>
              </View>
            </View>
            <View className="flex-row justify-center gap-2 px-6">
              <View className="gap-1 flex-1 items-center">
                <Text className="text-3xl font-urbanist-bold">356</Text>
                <Text className="font-urbanist-regular text-[#424242]">
                  Posts
                </Text>
              </View>
              <View className="w-[1px] h-[53px] bg-[#EEEEEE]" />
              <View className="gap-1 flex-1 items-center">
                <Text className="text-3xl font-urbanist-bold">46,379</Text>
                <Text className="font-urbanist-regular text-[#424242]">
                  Followers
                </Text>
              </View>
              <View className="w-[1px] h-[53px] bg-[#EEEEEE]" />
              <View className="gap-1 flex-1 items-center">
                <Text className="text-3xl font-urbanist-bold">318</Text>
                <Text className="font-urbanist-regular text-[#424242]">
                  Following
                </Text>
              </View>
            </View>
            <View className="flex-row gap-3 px-6">
              <Button
                className="flex-1"
                startIcon={<IconAddUser />}
                rounded="lg"
                size="md"
                type="primary"
              >
                Follow
              </Button>
              <Button
                className="flex-1"
                rounded="lg"
                startIcon={<IconChatFilled />}
                size="md"
                type="primary-outline"
              >
                Message
              </Button>
            </View>
            <View className="h-[1px] bg-[#EEEEEE] mx-6" />
            <Stories />

            <View className="mx-6">
              <View className="flex-row">
                <Pressable className="flex-1 items-center">
                  <View className="flex-row items-center pb-3 gap-2">
                    <IconFeeds fill="#FF4D67" />
                    <Text className="text-primary-500 font-urbanist-semibold">
                      Feeds
                    </Text>
                  </View>
                  <View className="w-full h-1 bg-primary-500 rounded-[100]" />
                </Pressable>
                <Pressable className="flex-1 items-center">
                  <View className="flex-row items-center pb-3 gap-2">
                    <IconCamera />
                    <Text className="text-greyscale-500 font-urbanist-semibold">
                      Shorts
                    </Text>
                  </View>
                  <View className="w-full h-[2px] bg-greyscale-200 rounded-[100]" />
                </Pressable>
                <Pressable className="flex-1 items-center">
                  <View className="flex-row items-center pb-3 gap-2">
                    <IconUsers />
                    <Text className="text-greyscale-500 font-urbanist-semibold">
                      Tag
                    </Text>
                  </View>
                  <View className="w-full h-[2px] bg-greyscale-200 rounded-[100]" />
                </Pressable>
              </View>
            </View>

            <FlatList
              data={[
                { id: "1" },
                { id: "2" },
                { id: "3" },
                { id: "4" },
                { id: "5" },
                { id: "6" },
              ]}
              numColumns={3}
              contentContainerStyle={{
                gap: 4,
              }}
              columnWrapperStyle={{
                gap: 4,
                marginHorizontal: 24,
              }}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <View className="aspect-square flex-1">
                  <Image
                    className="aspect-square rounded-lg w-full"
                    source={{ uri: "https://i.pravatar.cc/600" }}
                  />
                </View>
              )}
            />
          </ScrollView>
        </View>
      </SafeArea>
    </>
  );
}
