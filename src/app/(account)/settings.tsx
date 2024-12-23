import { SafeArea } from "@/components/SafeArea/SafeArea";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  IconAddUser,
  IconArrowLeft,
  IconChart,
  IconDanger,
  IconInfo,
  IconLock,
  IconNotifications,
  IconProfile,
  IconShieldDone,
  IconShow,
  IconUser,
  IconUserPlus,
} from "@/components/icons";
import { Link, useRouter } from "expo-router";
import { Divider } from "@/components/ui/Divider/Divider";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeArea className="p-6">
      <View className="pb-2">
        <TouchableOpacity
          className="flex-row items-center gap-4"
          onPress={router.back}
        >
          <IconArrowLeft />
          <Text className="font-urbanist-bold text-2xl">Settings</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingVertical: 24,
          }}
        >
          <View className="gap-8">
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconUserPlus />
              <Text className="font-urbanist-semibold text-lg">
                Follow and Invite Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconNotifications />
              <Text className="font-urbanist-semibold text-lg">
                Notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconLock />
              <Text className="font-urbanist-semibold text-lg">Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconShieldDone />
              <Text className="font-urbanist-semibold text-lg">Security</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconChart />
              <Text className="font-urbanist-semibold text-lg">Ads</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconUser />
              <Text className="font-urbanist-semibold text-lg">Account</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconInfo />
              <Text className="font-urbanist-semibold text-lg">Help</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconDanger />
              <Text className="font-urbanist-semibold text-lg">About</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row gap-5 items-center">
              <IconShow />
              <Text className="font-urbanist-semibold text-lg">Dark Theme</Text>
            </TouchableOpacity>
          </View>
          <Divider />
          <View className="gap-8">
            <Link className="text-blue text-base font-urbanist-bold" href="/">
              Add or Switch Account
            </Link>
            <Link className="text-blue text-base font-urbanist-bold" href="/">
              Logout john_doe
            </Link>
            <Link className="text-blue text-base font-urbanist-bold" href="/">
              Logout All Accounts
            </Link>
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  );
}
