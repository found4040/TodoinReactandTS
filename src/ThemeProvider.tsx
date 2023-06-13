import React, { useState ,createContext} from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContextR = createContext<ThemeContext>(
    
  {} as ThemeContext 

);


type Props = React.PropsWithChildren

export const ThemeProvider: React.FC<Props> = ({ children }:Props) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContextR.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextR.Provider>
  );
};