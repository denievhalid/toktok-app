import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import {
  IconBoldCamera,
  IconCamera,
  IconCategory,
  IconClose,
  IconCloseSquare,
  IconLogo,
} from "@/components/icons";

export default function CreatePostScreen() {
  return (
    <SafeArea>
      <View className="flex-row gap-4 items-center px-6 pb-2">
        <IconClose />
        <Text className="font-urbanist-bold text-2xl">New Post</Text>
      </View>
      <View className="px-6 flex-1">
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            className="aspect-square rounded-[32px]"
            source={{ uri: "https://i.pravatar.cc/600" }}
          />
          <View className="justify-between items-center flex-row">
            <View className="flex-row gap-4 items-center">
              <Text className="font-urbanist-bold text-lg">Gallery</Text>
            </View>
            <View className="gap-4 items-center flex-row">
              <TouchableOpacity activeOpacity={0.7}>
                <IconCategory />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <IconBoldCamera />
              </TouchableOpacity>
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
            numColumns={3}
            contentContainerStyle={{
              gap: 4,
              marginBottom: 24,
            }}
            columnWrapperStyle={{
              gap: 4,
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
  );
}
