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
    bgColor = "bg-[#dc2626] dark:bg-[#dc2626]";
    textColor = "text-[#dc2626] dark:text-[#dc2626]";
    hoverBgColor = "hover:bg-[#dc2626] dark:hover:bg-[#dc2626]";
    hoverTextColor = "hover:text-[#dc2626] dark:hover:text-[#dc2626]";
    groupHover = "group-hover:text-[#dc2626] dark:group-hover:text-[#dc2626]";
  }
  if (themeColor === "#0000FF") {
    bgColor = "bg-[#0000FF] dark:bg-[#0000FF]";
    textColor = "text-[#0000FF] dark:text-[#0000FF]";
    hoverBgColor = "hover:bg-[#0000FF] dark:hover:bg-[#0000FF]";
    hoverTextColor = "hover:text-[#0000FF] dark:hover:text-[#0000FF]";
    groupHover = "group-hover:text-[#0000FF] dark:group-hover:text-[#0000FF]";
  }
  if (themeColor === "#eab308") {
    bgColor = "bg-[#eab308] dark:bg-[#eab308]";
    textColor = "text-[#eab308] dark:text-[#eab308]";
    hoverBgColor = "hover:bg-[#eab308] dark:hover:bg-[#eab308]";
    hoverTextColor = "hover:text-[#eab308] dark:hover:text-[#eab308]";
    groupHover = "group-hover:text-[#eab308] dark:group-hover:text-[#eab308]";
  }
  if (themeColor === "#22c55e") {
    bgColor = "bg-[#22c55e] dark:bg-[#22c55e]";
    textColor = "text-[#22c55e] dark:text-[#22c55e]";
    hoverBgColor = "hover:bg-[#22c55e] dark:hover:bg-[#22c55e]";
    hoverTextColor = "hover:text-[#22c55e] dark:hover:text-[#22c55e]";
    groupHover = "group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]";
  }
  if (themeColor === "#FC6A03") {
    bgColor = "bg-[#FC6A03] dark:bg-[#FC6A03]";
    textColor = "text-[#FC6A03] dark:text-[#FC6A03]";
    hoverBgColor = "hover:bg-[#FC6A03] dark:hover:bg-[#FC6A03]";
    hoverTextColor = "hover:text-[#FC6A03] dark:hover:text-[#FC6A03]";
    groupHover = "group-hover:text-[#FC6A03] dark:group-hover:text-[#FC6A03]";
  }
  if (themeColor === "#6A35C3") {
    bgColor = "bg-[#6A35C3] dark:bg-[#6A35C3]";
    textColor = "text-[#6A35C3] dark:text-[#6A35C3]";
    hoverBgColor = "hover:bg-[#6A35C3] dark:hover:bg-[#6A35C3]";
    hoverTextColor = "hover:text-[#6A35C3] dark:hover:text-[#6A35C3]";
    groupHover = "group-hover:text-[#6A35C3] dark:group-hover:text-[#6A35C3]";
  }
  if (themeColor === "#00FF7F") {
    bgColor = "bg-[#00FF7F] dark:bg-[#00FF7F]";
    textColor = "text-[#00FF7F] dark:text-[#00FF7F]";
    hoverBgColor = "hover:bg-[#00FF7F] dark:hover:bg-[#00FF7F]";
    hoverTextColor = "hover:text-[#00FF7F] dark:hover:text-[#00FF7F]";
    groupHover = "group-hover:text-[#00FF7F] dark:group-hover:text-[#00FF7F]";
  }
  if (themeColor === "#0ea5e9") {
    bgColor = "bg-[#0ea5e9] dark:bg-[#0ea5e9]";
    textColor = "text-[#0ea5e9] dark:text-[#0ea5e9]";
    hoverBgColor = "hover:bg-[#0ea5e9] dark:hover:bg-[#0ea5e9]";
    hoverTextColor = "hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9]";
    groupHover = "group-hover:text-[#0ea5e9] dark:group-hover:text-[#0ea5e9]";
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
