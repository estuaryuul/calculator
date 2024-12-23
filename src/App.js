import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [input, setInput] = useState([]);
  const [afterCalc, setAfterClac] = useState(false);
  const [calc, setClac] = useState("");

  const calculator = () => {
    setAfterClac(true);
    const arr = input.join("");
    const result = evaluate(arr);
    setClac(result);
    setDisplay(result);
    setInput((prev) => {
      const newArr = [...prev, "=", result];
      return newArr;
    });
  };

  const inputHandle = (e) => {
    const eId = e.target.id;

    let inputId = eId;
    if (eId === "clear") {
      setInput([]);
      setDisplay("0");
      return;
    }

    if (eId === "divide") {
      inputId = "/";
    } else if (eId === "multiply") {
      inputId = "*";
    } else if (eId === "subtract") {
      inputId = "-";
    } else if (eId === "add") {
      inputId = "+";
    } else if (eId === "decimal") {
      inputId = ".";
    }
    setInput((prevIn) => {
      let arrPrev = prevIn;
      if (afterCalc) {
        if (isNaN(inputId)) {
          arrPrev = [calc];
        } else {
          arrPrev = [];
        }
        setAfterClac(false);
      }
      if (isNaN(prevIn[prevIn.length - 1]) && isNaN(inputId)) {
        arrPrev.pop();
      }

      const newIn = [...arrPrev, inputId];
      return newIn;
    });
    setDisplay(inputId);
    return;
  };

  return (
    <div className="App">
      <div id="display">
        <div>{input}</div>
        <div>{display}</div>
      </div>
      <div id="calculator-btn">
        <div id="clear" className="btn" onClick={inputHandle}>
          AC
        </div>
        <div id="divide" className="btn" onClick={inputHandle}>
          /
        </div>
        <div id="multiply" className="btn" onClick={inputHandle}>
          X
        </div>
        <div id="7" className="btn" onClick={inputHandle}>
          7
        </div>
        <div id="8" className="btn" onClick={inputHandle}>
          8
        </div>
        <div id="9" className="btn" onClick={inputHandle}>
          9
        </div>
        <div id="subtract" className="btn" onClick={inputHandle}>
          -
        </div>
        <div id="4" className="btn" onClick={inputHandle}>
          4
        </div>
        <div id="5" className="btn" onClick={inputHandle}>
          5
        </div>
        <div id="6" className="btn" onClick={inputHandle}>
          6
        </div>
        <div id="add" className="btn" onClick={inputHandle}>
          +
        </div>
        <div id="1" className="btn" onClick={inputHandle}>
          1
        </div>
        <div id="2" className="btn" onClick={inputHandle}>
          2
        </div>
        <div id="3" className="btn" onClick={inputHandle}>
          3
        </div>
        <div id="equals" className="btn" onClick={calculator}>
          =
        </div>
        <div id="0" className="btn" onClick={inputHandle}>
          0
        </div>
        <div id="decimal" className="btn" onClick={inputHandle}>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
