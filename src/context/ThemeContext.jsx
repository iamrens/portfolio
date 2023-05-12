import { createContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeContext = createContext({
  themeColor: "",
  setThemeColor: () => {},
  theme: "",
  setTheme: () => {},
});

export const ThemeSwitcher = ({ children }) => {
  const [themeColor, setThemeColor] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedThemeColor = themeColor
      ? localStorage.getItem("themeColor")
      : "#6A35C3";
    if (storedThemeColor) {
      setThemeColor(storedThemeColor);
    }
  }, [themeColor]);

  const handleThemeChange = (color) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color);
  };

  // Note: I'm using below code because because tailwind doesn't support dynamic class names.
  // Example: themeColor is purple, className={`bg-${themeColor}-500`}
  // Example: themeColor is #0000FF, className={`bg-[${themeColor}]`}

  let bgColor = "";
  let textColor = "";
  let hoverBgColor = "";
  let hoverTextColor = "";
  let groupHover = "";

  if (themeColor === "#dc2626") {
    bgColor = "bg-[#dc2626]";
    textColor = "text-[#dc2626]";
    hoverBgColor = "hover:bg-[#dc2626]";
    hoverTextColor = "hover:text-[#dc2626]";
    groupHover = "group-hover:text-[#dc2626]";
  }
  if (themeColor === "#0000FF") {
    bgColor = "bg-[#0000FF]";
    textColor = "text-[#0000FF]";
    hoverBgColor = "hover:bg-[#0000FF]";
    hoverTextColor = "hover:text-[#0000FF]";
    groupHover = "group-hover:text-[#0000FF]";
  }
  if (themeColor === "#eab308") {
    bgColor = "bg-[#eab308]";
    textColor = "text-[#eab308]";
    hoverBgColor = "hover:bg-[#eab308]";
    hoverTextColor = "hover:text-[#eab308]";
    groupHover = "group-hover:text-[#eab308]";
  }
  if (themeColor === "#22c55e") {
    bgColor = "bg-[#22c55e]";
    textColor = "text-[#22c55e]";
    hoverBgColor = "hover:bg-[#22c55e]";
    hoverTextColor = "hover:text-[#22c55e]";
    groupHover = "group-hover:text-[#22c55e]";
  }
  if (themeColor === "#FC6A03") {
    bgColor = "bg-[#FC6A03]";
    textColor = "text-[#FC6A03]";
    hoverBgColor = "hover:bg-[#FC6A03]";
    hoverTextColor = "hover:text-[#FC6A03]";
    groupHover = "group-hover:text-[#FC6A03]";
  }
  if (themeColor === "#6A35C3") {
    bgColor = "bg-[#6A35C3]";
    textColor = "text-[#6A35C3]";
    hoverBgColor = "hover:bg-[#6A35C3]";
    hoverTextColor = "hover:text-[#6A35C3]";
    groupHover = "group-hover:text-[#6A35C3]";
  }
  if (themeColor === "#00FF7F") {
    bgColor = "bg-[#00FF7F]";
    textColor = "text-[#00FF7F]";
    hoverBgColor = "hover:bg-[#00FF7F]";
    hoverTextColor = "hover:text-[#00FF7F]";
    groupHover = "group-hover:text-[#00FF7F]";
  }
  if (themeColor === "#0ea5e9") {
    bgColor = "bg-[#0ea5e9]";
    textColor = "text-[#0ea5e9]";
    hoverBgColor = "hover:bg-[#0ea5e9]";
    hoverTextColor = "hover:text-[#0ea5e9]";
    groupHover = "group-hover:text-[#0ea5e9]";
  }

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor: handleThemeChange,
        bgColor,
        textColor,
        hoverBgColor,
        hoverTextColor,
        groupHover,
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
