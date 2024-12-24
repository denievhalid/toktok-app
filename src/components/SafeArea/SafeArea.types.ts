import type { ReactNode } from "react";

export type SafeAreaProps = {
  bottom?: boolean;
  children: ReactNode;
  className?: string;
  transparent?: boolean;
};
