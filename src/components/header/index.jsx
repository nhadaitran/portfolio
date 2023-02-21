import React from "react";
import style from "./styles.scss";
const index = () => {
  
  return (
    <div className="header">
      <ul className="header__group">
        <li className="header__group__item">
          home
        </li>
        <li className="header__group__item">
          about
        </li>
        <li className="header__group__item">
          projects
        </li>
        <li className="header__group__item">
          contact
        </li>
      </ul>
    </div>
  );
};

export default index;
