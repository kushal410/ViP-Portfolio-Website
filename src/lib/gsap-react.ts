import { useEffect } from "react";

export function useGSAP(effect: () => void | (() => void), deps: any[] = []) {
  useEffect(() => {
    const cleanup = effect();
    return typeof cleanup === "function" ? cleanup : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
