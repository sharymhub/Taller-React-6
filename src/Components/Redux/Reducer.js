//Estado inicial del contador
const initialState = { count: 0 };

//funcion reductora que maneja las acciones del contador

export const counterReducer = (state = initialState, action) => {
  //Se evalua el tipo de accion que se envio
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      //si la accion no corresponde con ninguna, no hay cambios
      return state;
  }
};
