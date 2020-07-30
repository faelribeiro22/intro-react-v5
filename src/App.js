import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Teste",
      animal: "Snake",
      bread: "NajaMarx",
    }),
    React.createElement(Pet, {
      name: "Chumbinho",
      animal: "Cat",
      bread: "Vira-lata",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
