import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  return (
    <center>
     <div className={styles.calculator}>
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
  </div>
    </center>
    
  );
};

export default App;
