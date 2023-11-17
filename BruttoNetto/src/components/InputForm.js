// src/components/InputForm.js
import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
    const [brutto, setBrutto] = useState("");
    const [hours, setHours] = useState("");

    const handleBruttoChange = (value) => {
        setBrutto(value);
        onCalculate(parseFloat(value), parseFloat(hours));
    };

    const handleHoursChange = (value) => {
        setHours(value);
        onCalculate(parseFloat(brutto), parseFloat(value));
    };

    return (
      <div className="form-box">
        <form className="form">
          <span className="title">Brutto naar Netto</span>
          <span className="subtitle">
            Bereken hier snel Uw loon aan de hand van Uw Brutto uurloon en
            gewerkte uren.
          </span>
          <div className="form-container">
            <input
              type="number"
              className="input"
              placeholder="Brutto Uurloon"
              value={brutto}
              onChange={(e) => handleBruttoChange(e.target.value)}
            />
            <input
              type="number"
              className="input"
              placeholder="Gewerkten uren"
              value={hours}
              onChange={(e) => handleHoursChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
};

export default InputForm;
