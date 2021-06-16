import React from "react";
import { Link } from "react-router-dom";

const Sites = () => {
  return (
    <div className="wrapper-main">
      <div className="wrapper-body">
        <div>
          <img src="/images/taurob_logo_white.svg" alt="logo" />
        </div>
        <h2>Sites - Work in Progress</h2>
        <Link to={"/missions?FilterbySite=" + 1}>Go to Mission Editor</Link>
      </div>
      <div className="wrapper-bg" />
    </div>
  );
};

export default Sites;
