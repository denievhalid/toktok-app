import type { ReactNode } from "react";

export type ButtonRounded = "lg";

export type ButtonSizes = "xs" | "md" | "lg";

export type ButtonTypes = "dark" | "primary" | "primary-outline" | "secondary";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  onPress?: () => void;
  rounded?: ButtonRounded;
  startIcon?: ReactNode;
  size?: ButtonSizes;
  type?: ButtonTypes;
};
