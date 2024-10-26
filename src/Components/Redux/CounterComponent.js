import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Actions";
import Styles from "../../Styles/Contador.module.css";

const CounterComponent = () => {
  //selecciona el estado del store a redux
  const count = useSelector((state) => state.count);
  //UseDispatch nos permite enviar acciones al  store de redux
  const dispatch = useDispatch();

  return (
    <div className={Styles.Contador}>
      <h1>Contador con REDUX</h1>
      <p className={Styles.numero}>{count}</p>
      <button className={Styles.Button} onClick={() => dispatch(decrement())}>
        Decrementar
      </button>
      <button className={Styles.Button} onClick={() => dispatch(reset())}>
        Restablecer
      </button>
      <button className={Styles.Button} onClick={() => dispatch(increment())}>
        Incrementar
      </button>
    </div>
  );
};
export default CounterComponent;
