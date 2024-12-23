import { View } from "react-native";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { Button } from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
import { OnboardingSlider } from "@/features/Onboarding";

export default function OnboardingLayout() {
  return (
    <SafeArea bottom>
      <View className="h-full justify-between py-6 gap-10">
        <OnboardingSlider />
      </View>
    </SafeArea>
  );
}
