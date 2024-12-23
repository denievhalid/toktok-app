import { TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      className="bg-greyscale-100 h-[56px] rounded-xl px-5 text-base font-urbanist-regular"
      placeholder="Search"
      selectTextOnFocus
      {...props}
    />
  );
};
