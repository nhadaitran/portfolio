import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./styles.scss";
const Header = (props) => {
  const [scroll, setScroll] = React.useState(false);
  const handleScroll = React.useCallback((data) => {
    setScroll(data);
  }, []);
  React.useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      scrolled > 100 ? handleScroll(true) : handleScroll(false);
    };
    window.addEventListener("scroll", toggleVisible);
  }, [handleScroll, scroll]);

  return (
    <div className={`${`header`} ${scroll ? `header--scrolled` : ``}`}>
      <ul className="header__group">
        <li
          className={`${`header__group__item`} ${
            scroll ? `header__group__item--scrolled` : ``
          }`}
        >
          <NavLink to="/" onMouseDown={() => props.handleScroll(0)}>
            Home
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            scroll ? `header__group__item--scrolled` : ``
          }`}
        >
          <NavLink to="/about" onMouseDown={() => props.handleScroll(1)}>
            About
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            scroll ? `header__group__item--scrolled` : ``
          }`}
        >
          <NavLink to="/projects" onMouseDown={() => props.handleScroll(2)}>
            Projects
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            scroll ? `header__group__item--scrolled` : ``
          }`}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
