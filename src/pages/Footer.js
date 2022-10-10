import React from "react";
import "./footerStyle.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1> Currency Swap </h1>
            <h3 className="list-unstyled">
              <li>09134565908</li>
              <li>Hyderabad , INDIA</li>
              <li>LB Nagar </li>
            </h3>
          </div>  
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Curreny Swap | All rights reserved |
            Terms Of Service | Privacy | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;