import React from "react";
let InputStyle = {
  borderRadius: "0.25rem",
  border: "1px solid #ced4da",
  padding: ".375rem .75rem",
  height: "calc(1.5em + .75rem + 2px)"
};
const Input = ({ placeholder, type }) => {
  return <input style={InputStyle} placeholder={placeholder} type={type} />;
};

export default Input;
