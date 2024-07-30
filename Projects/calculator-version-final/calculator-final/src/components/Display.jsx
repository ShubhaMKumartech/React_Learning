import React, { useState } from "react";
import style from "./Display.module.css";

export const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        className={style.display}
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
};
