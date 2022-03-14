import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    const [show, setShow] = useState(false);
    function showSwitch() {
      return setShow(!show);
    }
  
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("navbar").style.transition = "1s";
      }
      prevScrollpos = currentScrollPos;
    };
    return (
      <div className="navbar" id="navbar">
        <div className="logo text-light px-2 rounded">
          <p className="logo-text mb-0">Dingdong Restaurant</p>
        </div>
        <div className={show ? "links active" : "links"}>
          <Link className="a" onClick={() => showSwitch()} to="/">
            Home
          </Link>
          
          <Link className="a" to="/menu">Menu</Link>
          <Link className="a" to="/about">About</Link>
          
          
          <Link className="a" to="/contact">Contact</Link>
          
        </div>
        <div
          onClick={() => showSwitch()}
          className={show ? "bars-button active mt-4" : "bars-button"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  };

export default Navigation;
