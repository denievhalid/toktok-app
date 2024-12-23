import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Input } from "@/components/ui/Input/Input";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { TagList } from "@/features/Tag/components/TagList/TagList";

export default function SearchPage() {
  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6 py-6">
          <View className="px-6">
            <Input />
          </View>
          <TagList />
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
        </View>
      </ScrollView>
    </SafeArea>
  );
}
