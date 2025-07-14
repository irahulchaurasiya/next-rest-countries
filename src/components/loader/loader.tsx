import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="demo-wrapper">
      <div className="globe-loader fa-solid fa-earth-americas">
        <div className="globe-loader-outer">
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default Loader;
