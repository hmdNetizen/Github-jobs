import React from "react";

const Errors = ({ message }) => {
  return (
    <div className="error">
      <h2 className="error__message">{message}</h2>
    </div>
  );
};

export default Errors;
