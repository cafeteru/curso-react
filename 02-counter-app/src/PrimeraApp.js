import React from "react";

const PrimeraApp = ({ saludo = "Eyyyyyyy" }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  );
};

export default PrimeraApp;
