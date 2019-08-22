import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

import "./styles.css";

function App() {
  const [y, sety] = useState(0);
  const [x, setx] = useState(0);
  const [m, setm] = useState(0);

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
      <Button color="primary" onClick={incrementy}>
        Incrementar y
      </Button>{" "}
      <Button color="danger" onClick={decrementy}>
        decrementar y
      </Button>{" "}
      <h2>valor y = {y}</h2>
      <Button color="primary" onClick={incrementx}>
        Incrementar x
      </Button>{" "}
      <Button color="danger" onClick={decrementx}>
        decrementar x
      </Button>{" "}
      <h2>valor x = {x}</h2>
      <hr />
      <Button
        style={{ width: "120px" }}
        outline
        color="secondary"
        onClick={mult}
      >
        Multiplicar
      </Button>{" "}
      <Button
        style={{ width: "120px" }}
        outline
        color="secondary"
        onClick={div}
      >
        Didivir
      </Button>
      {""}
      <br />
      <Button
        style={{ width: "120px" }}
        outline
        color="secondary"
        onClick={soma}
      >
        Somar
      </Button>{" "}
      <Button
        style={{ width: "120px" }}
        outline
        color="secondary"
        onClick={sub}
      >
        Subtrair
      </Button>
      {""}
      <h2> Resultado = {Number(m).toFixed(2)}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
