import React from "react";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Project from "../components/project";
import Header from "../components/header";
const Page = () => {
  const aboutRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const handleScroll = (val) => {
    window.scrollTo({
      top:
        val === 1
          ? aboutRef.current.offsetTop
          : val === 2
          ? projectRef.current.offsetTop
          : val === 3
          ? contactRef.current.offsetTop
          : 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header
        handleScroll={handleScroll}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <Home />
      <About prop={aboutRef} />
      <Project prop={projectRef} />
      <Contact prop={contactRef} />
    </>
  );
};

export default Page;
