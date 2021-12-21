import ReactDOM from "react-dom";
import "./index.css";
import CounterApp from "./CounterApp";

const divRoot = document.querySelector("#root");
// ReactDOM.render(<PrimeraApp saludo="Hola Mundo" />, divRoot); // Renderiza o muestra este elemento
ReactDOM.render(<CounterApp value={123} />, divRoot); // Renderiza o muestra este elemento
