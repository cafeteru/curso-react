import ReactDOM from "react-dom";
import "./index.css";
import PrimeraApp from "./PrimeraApp";

const divRoot = document.querySelector("#root");
ReactDOM.render(<PrimeraApp saludo="Hola Mundo" />, divRoot); // Renderiza o muestra este elemento
