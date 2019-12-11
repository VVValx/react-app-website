import React from "react";

function Input({ errors, type, name, value, onChange }) {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />

      {errors && <p className="error">{errors}</p>}
    </div>
  );
}

export default Input;
