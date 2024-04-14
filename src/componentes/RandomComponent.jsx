import React, { useState } from "react";

const RandomComponent = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <div>
      <p style={{ color: "aqua" }}>RESULTADO: {value}</p>
      <button
        onClick={handleIncrement}
        style={{
          backgroundColor: "green",
          color: "white",
          marginRight: "10px", // Separa del siguiente botón
        }}
      >
        INCREMENTAR
      </button>
      <button
        onClick={handleDecrement}
        style={{
          backgroundColor: "blue",
          color: "white",
          marginRight: "10px", // Separa del siguiente botón
        }}
      >
        DECREMENTAR
      </button>
      <button
        onClick={handleReset}
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        RESETEAR
      </button>
    </div>
  );
};

export default RandomComponent;
