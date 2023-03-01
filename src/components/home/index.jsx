import React from "react";
import style from "./styles.scss";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__title">
        Hi, I'm
        <p> &nbsp;Dai Nha!</p>
      </div>
      <div className="home__subtitle">
        <TypeIt
          options={{
            speed: 100,
            lifeLike: true,
            waitUntilVisible: true,
            cursor: false,
          }}
        >
          I'm
        </TypeIt>
        <span>
          <TypeIt
            options={{
              speed: 100,
              deleteSpeed: 80,
              lifeLike: true,
              waitUntilVisible: true,
              loop: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .type(" React Developer")
                .pause(500)
                .delete()
                .type(" STUer");
              return instance;
            }}
            getAfterInit={(instance) => {}}
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
