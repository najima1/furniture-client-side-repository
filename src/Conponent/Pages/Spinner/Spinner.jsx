import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center fixed h-screen inset-0 bg-white">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
