import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div className="wrapper-main">
      <div className="wrapper-body">
        <div>
          <img src="/images/taurob_logo_white.svg" alt="logo" />
        </div>
        <h2>Apps - Work in Progress</h2>
        <Link to={"/missions?FilterbyApp=" + 1}>Go to Mission Editor</Link>
      </div>
      <div className="wrapper-bg" />
    </div>
  );
};

export default Apps;
