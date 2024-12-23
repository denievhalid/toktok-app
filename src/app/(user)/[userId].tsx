import { SafeArea } from "@/components/SafeArea/SafeArea";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
  IconArrowLeft,
  IconLogo,
  IconMore,
  IconSend,
} from "@/components/icons";
import { Button } from "@/components/ui/Button/Button";

const { width } = Dimensions.get("screen");

const size = (width - 56) / 3;

export default function UserDetailScreen() {
  const { userId } = useLocalSearchParams<{ userId }>();

  return (
    <SafeArea>
      <View className="flex-row justify-between items-center px-6 pb-2">
        <View className="flex-row gap-4 items-center">
          <IconArrowLeft />
          <Text className="font-urbanist-bold text-2xl">Audio</Text>
        </View>
        <View className="flex-row gap-4 items-center">
          <IconSend />
          <IconMore />
        </View>
      </View>
      <View className="flex-1 px-6">
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center flex-row gap-6">
            <Image
              className="rounded-full"
              source={{ uri: "https://i.pravatar.cc/120" }}
              width={80}
              height={80}
            />
            <View className="gap-2">
              <Text className="font-urbanist-bold text-[20px]">Angelina</Text>
              <Text className="font-urbanist-bold text-sm">lizzymcalpine</Text>
              <Text className="font-urbanist-medium text-greyscale-700 text-sm">
                1,267 shorts
              </Text>
            </View>
          </View>
          <Button rounded="lg" size="md" type="primary">
            Save Audio
          </Button>

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
