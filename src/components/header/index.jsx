import React from "react";
import { NavLink } from "react-router-dom";
import style from "./styles.scss";
const index = () => {
  return (
    <div className="header">
      <ul className="header__group">
        <li className="header__group__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="header__group__item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="header__group__item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="header__group__item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default index;
