import { useState } from "react";
import { ThemeType } from "../theme";

export const useThemeConfig = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.Dark);
  const switchTheme = () => {
    if(currentTheme === ThemeType.Dark) {
      setCurrentTheme(ThemeType.Light);
    } else {
      setCurrentTheme(ThemeType.Dark);
    }
  }

  return {
    currentTheme,
    switchTheme
  }
}