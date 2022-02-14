import React from "react";

function CustomInput({ type, inputClass, value, changeEvent, placeholder }) {
  return (
    <input
      type={type}
      className={inputClass}
      value={value}
      placeholder={placeholder}
      onChange={(e)=>changeEvent(e)}
    />
  );
}

export default CustomInput;
