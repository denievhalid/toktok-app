import Swiper from "react-native-swiper";
import { Image, Text, View } from "react-native";
import { slides } from "./OnboardingSlider.constants";

export const OnboardingSlider = () => {
  return (
    <Swiper
      loop={false}
      dot={
        <View className="w-[6px] aspect-square bg-greyscale-300 rounded-full mx-[6px]" />
      }
      activeDot={
        <View className="w-[6px] aspect-square bg-primary-500 rounded-full mx-[6px]" />
      }
    >
      {slides.map(({ description, title }, index) => (
        <View
          key={index}
          className="gap-5 px-6 items-center pt-auto flex-1 pb-20"
        >
          <Image
            className="max-w-max my-auto"
            source={require("@/assets/images/onboarding-slide-3.png")}
          />
          <Text className="font-urbanist-bold text-3xl text-center">
            {title}
          </Text>
          <Text className="font-urbanist-regular text-base text-center text-greyscale-700">
            {description}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};
