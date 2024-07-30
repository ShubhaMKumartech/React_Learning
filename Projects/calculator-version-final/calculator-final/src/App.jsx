import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {

  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } 

    else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } 

    else if (buttonText === "DEL") {
    } 
    
    else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }

    console.log(buttonText);
  };


  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </center>
  );
};

export default App;
