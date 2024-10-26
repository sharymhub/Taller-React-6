import React, { useState, useEffect } from "react";
import Styles from "../Styles/Contador.module.css"

function Contador() {
  const [numero, setNumero] = useState(0);

  // Se ejecuta cada vez que el contador cambia
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${numero}`);
  }, [numero]); // Dependencia: solo se ejecutará cuando 'count' cambie
  
  return (
    <div className={Styles.Contador} >
      <h1>Contador</h1>
      <p className={Styles.numero}>{numero}</p>
      <button className={Styles.button} onClick={() => setNumero(numero - 1)}>Decrementar</button>
      <button className={Styles.button} onClick={() => setNumero(0)}>Reiniciar</button>
      <button className={Styles.button} onClick={() => setNumero(numero + 1)}>Incrementar</button>
      <p>Para ver funcionado el useEffect, No olvides abrir la consola.</p>
    </div>
  );
}

export default Contador;
