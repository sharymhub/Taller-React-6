import { createStore } from "redux"; //funcion para crear el store
import { counterReducer } from "./Reducer"; //Reductor que maneja las acciones

//se crea el store usando el reductor
export const store = createStore(counterReducer);
