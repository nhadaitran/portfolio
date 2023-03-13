import * as React from "react";
import { NavLink } from "react-router-dom";
import style from "./styles.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import FolderIcon from "@mui/icons-material/FolderCopyOutlined";
import ContactIcon from "@mui/icons-material/ContactSupportOutlined";
const Header = (props) => {
  const aboutRef = props.aboutRef.current;
  const projectRef = props.projectRef.current;
  const contactRef = props.contactRef.current;
  // useState
  const [scroll, setScroll] = React.useState({
    scrollHeader: false,
    style: null,
  });
  //useEffect
  React.useEffect(() => {
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScroll((state) => ({
        ...state,
        ...{ style: winScroll, scrollHeader: winScroll > 100 ? true : false },
      }));
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div
      className={`${`header`} ${scroll.scrollHeader ? `header--scrolled` : ``}`}
    >
      <ul className="header__group">
        <li
          onMouseDown={() => props.handleScroll(0)}
          className={`${`header__group__item`} ${
            aboutRef !== null &&
            Math.round(scroll.style) <=
              aboutRef.offsetTop - Math.ceil(aboutRef.offsetTop / 2.5)
              ? `header__group__item--active`
              : ``
          }`}
        >
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            aboutRef !== null &&
            Math.round(scroll.style) >=
              aboutRef.offsetTop - Math.ceil(aboutRef.offsetTop / 2.5) &&
            Math.round(scroll.style) <=
              aboutRef.offsetTop + Math.ceil(aboutRef.offsetTop / 2.5)
              ? `header__group__item--active`
              : ``
          }`}
          onMouseDown={() => props.handleScroll(1)}
        >
          <NavLink to="/about">
            <InfoIcon />
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            projectRef !== null &&
            Math.round(scroll.style) >=
              projectRef.offsetTop - Math.ceil(projectRef.offsetTop / 2.5) &&
            Math.round(scroll.style) <=
              projectRef.offsetTop + Math.ceil(projectRef.offsetTop / 2.5)
              ? `header__group__item--active`
              : ``
          }`}
          onMouseDown={() => props.handleScroll(2)}
        >
          <NavLink to="/projects">
            <FolderIcon />
          </NavLink>
        </li>
        <li
          className={`${`header__group__item`} ${
            contactRef !== null &&
            Math.round(scroll.style) >=
              projectRef.offsetTop + Math.ceil(projectRef.offsetTop / 2.5) &&
            Math.round(scroll.style) <=
              contactRef.offsetTop + Math.ceil(contactRef.offsetTop / 2.5)
              ? `header__group__item--active`
              : ``
          }`}
          onMouseDown={() => props.handleScroll(3)}
        >
          <NavLink to="/contact">
            <ContactIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
