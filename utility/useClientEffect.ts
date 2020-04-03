import { useEffect } from "react";

export function useClientEffect(effect: Function, deps: any[]) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      effect();
    }
  }, deps);
}
