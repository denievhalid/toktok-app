import { Pressable, Text, TouchableOpacity } from "react-native";
import { buttonClasses, textClasses } from "./Button.constants";
import type { ButtonProps } from "./Button.types";
import { isValidElement } from "react";
import { IconLoading } from "@/components/icons";

export const Button = ({
  children,
  className,
  isLoading,
  onPress,
  rounded,
  startIcon,
  size,
  type,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={buttonClasses({ className, rounded, size, type })}
      onPress={onPress}
    >
      {isLoading ? (
        <IconLoading />
      ) : (
        <>
          {isValidElement(startIcon) && startIcon}
          <Text className={textClasses({ type })}>{children}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
