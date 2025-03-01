import React, { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="comp-button">
      Change components
    </button>
  );
};

export default Button;
