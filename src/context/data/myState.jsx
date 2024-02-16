import React, { useState } from "react";
import MyContext from "./myContext";

function myState(props) {
  const [mode, setMode] = useState("Light");

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
