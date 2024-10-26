import React, { Children, createContext, useState } from "react";

export const ThemeContext = createContext(); //permitira compartir datos del tema entre los componentes

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("claro");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "claro" ? "oscuro" : "claro"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


