import { useEffect, useState } from "react";

export default function useTransition() {
  const [isActive, setIsActive] = useState(false);

  const setTransition = (classes = "", startPointClass = "t-from-bottom-2") => {
    return `${classes} ${startPointClass}${
      isActive ? ` clear-transition` : ""
    }`;
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return {
    setTransition,
  };
}
