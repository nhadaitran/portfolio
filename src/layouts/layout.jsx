import React from "react";
import Header from "../components/header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
