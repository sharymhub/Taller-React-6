import React, { useContext } from "react"; //se importa useContexte para poder usar el contexto
import { ThemeContext } from "./ThemeContext";
import styles from "../../Styles/Theme.module.css";

import imageClaro from "../../Assets/dom (1).png";
import imageOscuro from "../../Assets/luna (1).png";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeClass = theme === "claro" ? styles.themeClaro : styles.themeOscuro;
  const themeImage = theme === "claro" ? imageClaro : imageOscuro;

  return (
    <div className={themeClass}>
      <img src={themeImage} alt="imagen del tema" />
      <p>El tema actual es {theme}</p>
      <button className={styles.button} onClick={toggleTheme}>
        Cambiar tema
      </button>
    </div>
  );
};
export default ThemedComponent;
