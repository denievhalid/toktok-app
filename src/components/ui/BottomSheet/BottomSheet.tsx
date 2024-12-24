import { forwardRef, useCallback } from "react";
import { Portal } from "@gorhom/portal";
import Sheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import type { BottomSheetProps } from "./BottomSheet.types";
import { useFocusEffect } from "expo-router";

export const BottomSheet = forwardRef<Sheet, BottomSheetProps>(
  ({ children }, ref) => {
    useFocusEffect(
      useCallback(() => {
        return () => ref?.current?.close();
      }, []),
    );

    const backdropComponent = useCallback(
      (props) => (
        <BottomSheetBackdrop
          {...props}
          enableTouchThrough={false}
          pressBehavior={"close"}
          opacity={0.7}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );

    return (
      <Portal>
        <Sheet
          backdropComponent={backdropComponent}
          enableDynamicSizing={true}
          enablePanDownToClose={true}
          index={-1}
          keyboardBehavior="extend"
          keyboardBlurBehavior="restore"
          ref={ref}
        >
          <BottomSheetView className="p-6 pb-16">{children}</BottomSheetView>
        </Sheet>
      </Portal>
    );
  },
);
