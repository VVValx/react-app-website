import React from "react";

function FormButton({ label, validator }) {
  return (
    <div className="form-input">
      <button disabled={validator}>{label}</button>
    </div>
  );
}

export default FormButton;
