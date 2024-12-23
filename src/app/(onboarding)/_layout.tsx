import { View } from "react-native";
import { SafeArea } from "@/components/SafeArea/SafeArea";
import { Button } from "@/components/ui/Button/Button";
import { useRouter } from "expo-router";
import { OnboardingSlider } from "@/features/Onboarding";

export default function OnboardingLayout() {
  const router = useRouter();

  return (
    <SafeArea bottom>
      <View className="h-full justify-between py-6 gap-10">
        <OnboardingSlider />
        <View className="gap-3 px-6">
          <Button rounded="lg" size="lg" type="primary">
            Next
          </Button>
          <Button
            onPress={() => router.replace("/(tabs)")}
            rounded="lg"
            size="lg"
            type="secondary"
          >
            Skip
          </Button>
        </View>
      </View>
    </SafeArea>
  );
}
