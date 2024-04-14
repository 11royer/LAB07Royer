import React, { useState } from "react";

const CompWithProps = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        textAlign: "center",
        backgroundColor: "#d0fffd",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Escribe algo..."
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
      <p style={{ marginTop: "10px" }}>Texto ingresado: {inputText}</p>
    </div>
  );
};

export default CompWithProps;
