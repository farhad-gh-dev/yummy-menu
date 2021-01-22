import { useState } from "react";

const useThemeMode = () => {
  const [themeIsDark, setThemeIsDark] = useState(false);

  const themeModeHandler = () => {
    setThemeIsDark(!themeIsDark);
  };

  return { themeIsDark, themeModeHandler };
};

export default useThemeMode;
