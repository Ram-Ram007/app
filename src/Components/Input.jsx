import React from "react";

function Input({ name, type, placeholder, onChange }) {
  return (
    <div>
      <label>
        {name}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Input;
