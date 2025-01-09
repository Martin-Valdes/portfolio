import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./BackReact.scss";

function BackReact() {
  const [memo, setMemo] = useState(10);

  const estilo = (data) => {
    setMemo(data);
  };
  const value = {
    animation: `logo-spin infinite ${memo}s linear`,
  };
  return (
    <>
     
    </>
  );
}

export default BackReact;
