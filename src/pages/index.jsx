import React from "react";
import Home from "../components/home";
import About from "../components/about";
import Project from "../components/project";
import Header from "../components/header";
const Page = () => {
  const aboutRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const handleScroll = (val) => {
    window.scrollTo({
      top:
        val === 1
          ? aboutRef.current.offsetTop
          : val === 2
          ? projectRef.current.offsetTop
          : 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header handleScroll={handleScroll} />
      <Home />
      <About prop={aboutRef} />
      <Project prop={projectRef} />
    </>
  );
};

export default Page;
