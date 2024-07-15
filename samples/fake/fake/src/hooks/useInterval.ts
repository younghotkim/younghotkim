import { useEffect } from "react";

export const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    let timer = setInterval(callback, duration);
    return clearInterval(timer);
  }, [callback, duration]);
};
