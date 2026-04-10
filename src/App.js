import React, { useState } from "react";
import styles from "./styles";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const handleBinaryChange = (value) => {
    setBinary(value);

    if (value === "") {
      setDecimal("");
      setError("");
      return;
    }

    if (/^[01]+$/.test(value)) {
      setDecimal(parseInt(value, 2));
      setError("");
    } else {
      setError("Only 0 and 1 allowed");
      setDecimal("");
    }
  };

  const clearAll = () => {
    setBinary("");
    setDecimal("");
    setError("");
  };

  return (
    <div style={styles.container}>
      <h1>Binary to Decimal Converter</h1>

      <input
        type="text"
        placeholder="Enter binary"
        value={binary}
        onChange={(e) => handleBinaryChange(e.target.value)}
      />

      <div>
        <h2>Decimal: {decimal}</h2>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      <button onClick={clearAll}>Clear</button>
    </div>
  );
}

export default App;