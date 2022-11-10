import { useEffect } from "react";

export const useClickOutside = (
  handle: any,
  el: any,
  reference: any,
  isHandled: any
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!isHandled || reference?.current.contains(event?.target as Node)) {
        return;
      }
      if (!event.target.closest(".menu")) handle();
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [isHandled, reference]);
};
