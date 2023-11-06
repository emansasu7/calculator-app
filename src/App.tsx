import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleOperator = (operator: string) => {
    setInput((prevInput) => prevInput + operator);
  };

  return (
    <div className="calculator">
      <div className="input-section">
        <div className="display">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="operators">
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
        <div className="buttons">
          <button style={{ marginRight: "10px" }} onClick={clearInput}>
            Clear
          </button>
          <button onClick={calculateResult}>Calculate</button>
        </div>
      </div>
      <div className="result">{result !== null ? `Result: ${result}` : ""}</div>
    </div>
  );
};

export default App;
