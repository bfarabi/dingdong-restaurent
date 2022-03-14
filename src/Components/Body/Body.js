import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu></Menu>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="about" element={<About></About>} />
      </Routes>
    </div>
  );
};

export default Body;
