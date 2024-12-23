import { cva } from "class-variance-authority";

export const buttonClasses = cva(
  ["items-center justify-center flex-row gap-2 px-4"],
  {
    variants: {
      rounded: {
        xs: "rounded-xs",
        xl: "rounded-xl",
        lg: "rounded-[100]",
      },
      size: {
        xs: "h-8",
        md: "h-11",
        lg: "h-[55px]",
      },
      type: {
        dark: "bg-dark-30",
        primary: "bg-primary-500",
        "primary-outline": "bg-transparent border-2 border-primary-500",
        secondary: "bg-primary-100",
      },
    },
    defaultVariants: {
      size: "xs",
      type: "dark",
      rounded: "xl",
    },
  },
);

export const textClasses = cva(["font-urbanist-bold text-xl"], {
  variants: {
    type: {
      dark: "text-white",
      primary: "text-white",
      "primary-outline": "text-primary-500",
      secondary: "text-primary-500",
    },
  },
});
