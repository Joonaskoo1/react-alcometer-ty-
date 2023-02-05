import React, { useState } from "react";
import './App.css';

const App = () => {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [bottles, setBottles] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const calculateBloodAlcoholLevel = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    gramsLeft = gramsLeft < 0 ? 0 : gramsLeft;

    let bloodAlcoholLevel = 0;
    if (gender === "male") {
      bloodAlcoholLevel = gramsLeft / (weight * 0.7);
    } else {
      bloodAlcoholLevel = gramsLeft / (weight * 0.6);
    }

    setResult(bloodAlcoholLevel.toFixed(2));
  };

  return (
    <div className="divi">
      <h1>Alcometer</h1>
      <label>
        Weight (in kg):
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Number of beer bottles:
        <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <label>
        Time (in hours):
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <button onClick={calculateBloodAlcoholLevel}>Calculate</button>
      <br />
      <br />
      Result: {result}
    </div>
  );
};

export default App;
