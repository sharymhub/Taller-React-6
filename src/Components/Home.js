import React from "react";
import Styled from "../Styles/Home.module.css";
import cat from "../Assets/Cat.png";

function Home() {
  return (
    <div className={Styled.Home}>
      <h1>Bienvenido a la página de Inicio</h1>
      <img className={Styled.img} src={cat} alt="Cat" />
    </div>
  );
}
export default Home;
