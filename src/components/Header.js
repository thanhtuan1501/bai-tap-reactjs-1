import React from "react";

function Header(props) {
  return (
    <div>
      <div className="grid wide container">
        <div className="row row-header">
          <div className="col l-4 header">
            <div className="header-logo">
              <img src="images/header_logo.png" alt="" />
            </div>
          </div>
          <div className="col l-4 header-title">
            <h3>STUDY ENGLISH</h3>
          </div>
          <div className="col l-4 header-json">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
