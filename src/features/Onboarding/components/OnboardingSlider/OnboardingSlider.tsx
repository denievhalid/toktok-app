import Swiper from "react-native-swiper";
import { Image, Text, View } from "react-native";
import { slides } from "./OnboardingSlider.constants";
import {Button} from "@/components/ui/Button/Button";
import {useRouter} from "expo-router";
import {useCallback, useEffect, useRef, useState} from "react";

export const OnboardingSlider = () => {
  const ref = useRef<Swiper>()
  const [slide, setSlide] = useState(0)
  const router = useRouter();

  useEffect(() => {
    if (slide === 3) {
      handleOnboardingDone()
    } else {
      ref.current?.scrollTo(slide, true)
    }
  }, [slide]);

  const handleNextSlide = useCallback(() => {
    setSlide(prev => ++prev)
  }, [])

  const handleOnboardingDone = () => {
    router.replace("/(tabs)")
  }

  return (
    <>
      <Swiper
        ref={ref}
        loop={false}
        scrollEnabled={false}
        dot={
          <View className="w-[6px] aspect-square bg-greyscale-300 rounded-full mx-[6px]" />
        }
        activeDot={
          <View className="w-[6px] aspect-square bg-primary-500 rounded-full mx-[6px]" />
        }
      >
        {slides.map(({ description, image, title }, index) => (
          <View
            key={index}
            className="gap-5 px-6 items-center justify-center pt-auto flex-1"
          >
            <Image
              className="max-w-max"
              source={image}
            />
            <Text className="font-urbanist-bold text-3xl text-center">
              {title}
            </Text>
            <Text className="font-urbanist-regular text-base text-center text-greyscale-700">
              {description}
            </Text>
          </View>
        ))}
      </Swiper><View className="gap-3 px-6">
      <Button onPress={handleNextSlide} rounded="lg" size="lg" type="primary">
        Next
      </Button>
      <Button
        onPress={handleOnboardingDone}
        rounded="lg"
        size="lg"
        type="secondary"
      >
        Skip
      </Button>
    </View>
    </>
  );
};
