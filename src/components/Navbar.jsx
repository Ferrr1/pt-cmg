// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuData } from "../Data/MenuData";
import React, { useState } from "react";
import "./NavbarStyles.css";
import Logo from "../assets/img/logo-pt2.png";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };
  return (
    <>
      <nav className="NavbarItems">
        <div className="logo">
          <img className="imageCompany" src={Logo} alt="Logo Perusahaan" />
          <h4>Cahya Mandiri Gemilang</h4>
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
