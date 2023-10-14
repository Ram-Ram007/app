//final code
import React from "react";
//alternative for props
  function Input({ label, id, type, name, placeholder, onChange, value }) {
    return (
      <>
        <label>{label}</label>
        <input
        //id=""
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </>
    );
  }

  export default Input;