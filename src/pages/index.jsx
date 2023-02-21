import React from "react";
import style from "./styles.scss";
import Home from "../components/home";
import About from "../components/about";
const Page = () => {
  return (
    <div className="page">
      <Home />
      <About />
    </div>
  );
};

export default Page;
