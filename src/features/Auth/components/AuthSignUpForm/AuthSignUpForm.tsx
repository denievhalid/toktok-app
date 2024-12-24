import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";
import { Link, useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { fetchSignUp } from "@/features/Auth/services";
import { useState } from "react";

export const AuthSignUpForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: fetchSignUp,
  });

  const handleSubmit = () => {
    signUp({ email, password })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
        console.log(11);
      });
  };

  return (
    <View className="justify-between h-full gap-4">
      <View className="p-6 justify-center gap-6 flex-1">
        <Text className="font-urbanist-bold text-[40px] mb-14">
          {`Create your\nAccount`}
        </Text>
        <Input
          readOnly={isPending}
          onChangeText={setEmail}
          placeholder="Email"
          value={email}
        />
        <Input
          onChangeText={setPassword}
          readOnly={isPending}
          placeholder="Password"
          value={password}
        />
        <Button
          disabled={isPending}
          onPress={handleSubmit}
          size="lg"
          rounded="lg"
          type="primary"
        >
          Sign in
        </Button>
        <Link
          className="text-primary-500 text-center text-base font-urbanist-semibold"
          href="/forgot"
        >
          Forgot the password?
        </Link>
      </View>
      <View className="flex-row flex-wrap gap-1 justify-center items-center">
        <Text className="text-greyscale-500 text-center text-base font-urbanist-regular">
          Already have an account?
        </Text>
        <TouchableOpacity
          hitSlop={15}
          onPress={() => router.replace("/signin")}
        >
          <Text className="text-primary-500 font-urbanist-semibold">
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
