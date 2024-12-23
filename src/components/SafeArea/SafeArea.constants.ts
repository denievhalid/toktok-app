import { cva } from "class-variance-authority";

export const safeAreaClasses = cva(["h-full"], {
  variants: {
    transparent: {
      false: ["bg-white"],
      true: ["bg-transparent"],
    },
  },
  defaultVariants: {
    transparent: false,
  },
});
