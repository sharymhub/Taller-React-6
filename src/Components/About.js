import React from "react";
import styled from "../Styles/About.module.css";
import CatT from "../Assets/descarga.jpg";
function About() {
  return (
    <div className={styled.About}>
      <h1>Sobre nosotros</h1>
      <div className={styled.card}>
        <p>
          Bienvenido a la página creada por <i>Michi Anonimus</i>, el felino detrás de
          todo esto. Con sus habilidades de programación (aprendidas entre
          siestas), decidió crear un espacio exclusivo para los amantes de
          los gatos. Aquí no hay distracciones: solo fotos de gatitos en su
          máxima expresión, porque si algo sabemos, es que los gatos mandan en
          internet... ¡y en nuestros corazones!.
        </p>
        <img className={styled.img} src={CatT} />
      </div>
    </div>
  );
}
export default About;
