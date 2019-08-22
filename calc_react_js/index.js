import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [y, sety] = useState(0);
  const [x, setx] = useState(0);
  const [m, setm] = useState();

  const incrementy = () => {
    sety(y + 1);
  };
  const incrementx = () => {
    setx(x + 1);
  };
  const decrementy = () => {
    sety(y - 1);
  };
  const decrementx = () => {
    setx(x - 1);
  };
  const mult = () => {
    setm(y * x);
  };
  const div = () => {
    setm(y / x);
  };
  const soma = () => {
    setm(y + x);
  };
  const sub = () => {
    setm(y - x);
  };

  return (
    <div className="App">
      <h1>Mini Calculadora React:</h1>
      <button onClick={incrementy}>Incrementar y</button>
      <button onClick={decrementy}>decrementar y</button>
      <h2>valor y = {y}</h2>
      <button onClick={incrementx}>Incrementar x</button>
      <button onClick={decrementx}>decrementar x</button>
      <h2>valor x = {x}</h2>
      <hr />
      <button onClick={mult}>Multiplicar</button>
      <button onClick={div}>Didivir</button>
      <br />
      <button onClick={soma}>Somar</button>
      <button onClick={sub}>Subtrair</button>
      <h2> Resultado = {m}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
