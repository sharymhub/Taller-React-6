import React from "react";
import {
  BrowserRouter as Router, // es el componente que permite manejar el enrutamiento en la aplicación utilizando la API de historial del navegador.
  Routes,
  Route, //definen las rutas y qué componentes se deben renderizar para cada URL.
  NavLink, // Componente usado para crear enlaces de navegación que permite resaltar el enlace actual cuando está activo.
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import "./index.css";
import Contador from "./Components/Counter";
import ThemedComponent from "./Components/Context/ThemeComponent";
import { ThemeProvider } from "./Components/Context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/Store";
import CounterComponent from "./Components/Redux/CounterComponent";

//Ejercicio 1
function App() {
  return (
    <Router>
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
//export default App;

//Ejercicio 2
function App2() {
  return (
    <div>
      <Contador />
    </div>
  );
}
//export default App2;

function App3() {
  return (
    <div>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  );
}
//export default App3;

const App4 = () => {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
      </div>
    </Provider>
  );
};
export default App4;
