import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Jason",
      animal: "Dog",
      breed: "Yorkshire",
    }),
    React.createElement(Pet, {
      name: "Maui",
      animal: "Dog",
      breed: "Portuguese water Dog",
    }),
    React.createElement(Pet, {
      name: "Kiara",
      animal: "Cat",
      breed: "La Perm",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
