import "./calculator.css";
import { useState } from "react";
import buttonClickSound from "../assets/button_click.mp3";
import buttonClickmic from "../assets/one click.mp3";

const Calculator = () => {
  
  const [input, setInput] = useState("");
  const [isOn, setIsOn] = useState(false);

  const buttonClickVoice = new Audio(buttonClickmic);

  const numberhandler = (value: string) => {
    if (isOn) {
      buttonClickVoice.play();
      if (input === "0") {
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  const evaluateExpression = () => {
    if (isOn) {
      buttonClickVoice.play();
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("0");
      }
    }
  };

  const resetCalculator = () => {
    if (isOn) {
      buttonClickVoice.play();
      setInput("");
    }
  };

  const buttonClickAudio = new Audio(buttonClickSound);

  const powerButton = () => {
    setIsOn(!isOn);
    buttonClickAudio.play();
    if (isOn) {
      setInput("");
    }
  };

  return (
    <div>
    <h1>Calculator React App</h1>
    <div className={`device ${isOn ? "blue-background" : "brown-background"}`}>
      <input type="text" placeholder="number" value={input} />
      <div className="grp">
        <button className="my-button" onClick={() => numberhandler("7")}>7</button>
        <button className="my-button" onClick={() => numberhandler("8")}>8</button>
        <button className="my-button" onClick={() => numberhandler("9")}>9</button>
        <button className="my-button" onClick={() => numberhandler("+")}>+</button>
      </div>
      <div className="grp">
        <button className="my-button" onClick={() => numberhandler("4")}>4</button>
        <button className="my-button" onClick={() => numberhandler("5")}>5</button>
        <button className="my-button" onClick={() => numberhandler("6")}>6</button>
        <button className="my-button" onClick={() => numberhandler("-")}>-</button>
      </div>
      <div className="grp">
        <button className="my-button" onClick={() => numberhandler("1")}>1</button>
        <button className="my-button" onClick={() => numberhandler("2")}>2</button>
        <button className="my-button" onClick={() => numberhandler("3")}>3</button>
        <button className="my-button" onClick={() => numberhandler("*")}>*</button>
      </div>
      <div className="grp">
        <button className="my-button" onClick={() => numberhandler("0")}>0</button>
        <button className="my-button" onClick={() => numberhandler(".")}>.</button>
        <button className="my-button" onClick={() => numberhandler("/")}>/</button>
        <button className="my-button3" onClick={resetCalculator}>Reset</button>
      </div>
      <button className="my-button1" onClick={powerButton}>{isOn ? "On" : "Off"}</button>
      <button className="my-button2" onClick={evaluateExpression}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
