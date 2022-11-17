import { MutableRefObject, useEffect } from "react";

export const useClickOutside = <
  T extends { contains: (event: Node) => Node } | HTMLHeadingElement | null
>(
  handle: () => void,
  reference: MutableRefObject<T>,
  isHandled: boolean
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
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
