import React from 'react';

function Alert({ onInputChange }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return (
    <div className="alert-container">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type here"
        className="input-box"
      />
      <button className="button"> Klikk Her </button>
    </div>
  );
}

export default Alert;
