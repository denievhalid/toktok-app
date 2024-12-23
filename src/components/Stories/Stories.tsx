import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { stories } from "./Stories.constants";
import { IconPlus } from "@/components/icons";

export const Stories = () => {
  const router = useRouter();

  return (
    <FlatList
      data={stories}
      keyExtractor={({ id }) => id}
      horizontal
      contentContainerStyle={{
        gap: 16,
        paddingHorizontal: 24,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Pressable
          className="items-center gap-2"
          onPress={() => router.push("/story")}
        >
          <View
            className={`w-[80px] aspect-square bg-[${index % 2 === 0 ? "#E0E0E0" : "#FF4D67"}] items-center justify-center rounded-full`}
          >
            <Image
              className="rounded-full"
              source={{ uri: "https://i.pravatar.cc/120" }}
              width={72}
              height={72}
            />
            {index === 0 && (
              <View className="absolute right-1 bottom-1">
                <IconPlus />
              </View>
            )}
          </View>
          <Text className="font-urbanist-semibold text-sm">Julia</Text>
        </Pressable>
      )}
    />
  );
};
