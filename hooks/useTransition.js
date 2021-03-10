import { useEffect, useState } from "react";

const useTransition = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const setTransition = () => {
    return `t-from-top ${showAnimation ? "clear-transition" : ""}`;
  };

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return {
    showAnimation,
    setTransition,
  };
};

export default useTransition;
