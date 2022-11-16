import { useEffect } from "react";

export const useClickOutside = (
  handle: any,
  reference: any,
  isHandled: boolean
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (
        !reference.current ||
        !isHandled ||
        reference?.current.contains(event?.target as Node)
      ) {
        return;
      }
      handle();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handle, reference]);
};
