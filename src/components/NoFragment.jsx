import React from "react";

const suma = (a= 0, b = 0) => {
    return a + b;
}

const nombre = "Leandro";

export class NoFragment extends React.Component {
  render() {
    return (
      <>
        <h1>{nombre}</h1>
        <p>No hay fragment</p>
        <p>{suma(1, 2)}</p>
      </>
    );
  }
}
