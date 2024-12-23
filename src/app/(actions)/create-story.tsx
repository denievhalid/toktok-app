import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
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
  IconSettings,
} from "@/components/icons";

const { width } = Dimensions.get("screen");

const size = (width - 56) / 3;

export default function CreatePostScreen() {
  return (
    <SafeArea>
      <View className="px-6 items-center justify-between flex-row pb-2">
        <View className="flex-row gap-4">
          <IconClose />
          <Text className="font-urbanist-bold text-2xl">Add Story</Text>
        </View>
        <Pressable>
          <IconSettings />
        </Pressable>
      </View>
      <View className="px-6 flex-1">
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
              <View className={`flex-1`}>
                <Image
                  className={`rounded-lg`}
                  source={{ uri: "https://i.pravatar.cc/800" }}
                  width={size}
                  height={size * 2}
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </ScrollView>
      </View>
    </SafeArea>
  );
}
