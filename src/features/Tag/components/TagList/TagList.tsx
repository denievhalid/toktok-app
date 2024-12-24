import { FlatList, Pressable, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchGetTags } from "@/features/Tag/services";

export const TagList = () => {
  const { data } = useQuery({
    queryKey: ["tag"],
    queryFn: fetchGetTags,
  });

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      horizontal
      contentContainerStyle={{
        gap: 12,
        paddingHorizontal: 24,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: { name }, index }) => (
        <Pressable className="items-center gap-2">
          <View className="h-[38px] border-2 border-[#FF4D67] rounded-[100] items-center justify-center px-5">
            <Text className="font-urbanist-semibold text-base text-primary-500">
              {name}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
};
