import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconMore } from "@/components/icons";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { profileMenu } from "@/features/Profile/components/ProfileMoreMenu/ProfileMoreMenu.constants";
import Sheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";

export const ProfileMoreMenu = () => {
  const bottomSheetRef = useRef<Sheet | null>(null);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <IconMore />
      </TouchableOpacity>

      <BottomSheet ref={bottomSheetRef}>
        <View className="gap-6">
          {profileMenu.map(({ icon: Icon, link, title }, index) => (
            <Link key={index} href={link}>
              <View className="flex-row gap-5 items-center">
                <Icon />
                <Text className="font-urbanist-semibold text-lg">{title}</Text>
              </View>
            </Link>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};
