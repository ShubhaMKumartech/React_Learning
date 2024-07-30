import React from "react";
import styles from "./FoodInput.module.css";

const FoodInput = ({hadleKeyDown}) => {
  

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={hadleKeyDown}
    ></input>
  );
};

export default FoodInput;
