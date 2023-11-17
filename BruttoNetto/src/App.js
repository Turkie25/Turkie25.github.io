// src/App.js
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import WageResult from "./components/WageResult";
import "./App.css"; // Import the CSS file

const App = () => {
  const [netto, setNetto] = useState(null);
  const [inputProvided, setInputProvided] = useState(false);

  const calculateNetto = (brutto, hours) => {
    if (!isNaN(brutto) && !isNaN(hours) && brutto >= 0 && hours >= 0) {
      const nettoWage = (brutto / 100) * 79 * hours;
      setNetto(nettoWage);
      setInputProvided(true);
    } else {
      setNetto(null);
      setInputProvided(false);
    }
  };

  const formattedNetto =
    inputProvided && !isNaN(netto)
      ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(netto)
      : "";

  return (
    <div className="form-box">
      <InputForm onCalculate={calculateNetto} />

      {formattedNetto && (
        <div className="result">
          <WageResult netto={formattedNetto} />
        </div>
      )}
    </div>
  );
};

export default App;
