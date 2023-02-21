import React from "react";
import style from "./styles.scss";
const Home = () => {
  let arr = ["Developer", "Stuer"];
  const [index, setIndex] = React.useState(0);
  console.log(index);
  const increaseIndex = React.useCallback(() => {
    if (index === arr.length - 1) {
      setIndex(0);
      return;
    } else {
      setIndex(index + 1);
      return;
    }
  }, [arr.length, index]);
  React.useEffect(() => {
    const IndexInterval = setInterval(() => {
      increaseIndex();
    }, 5000);
    return () => clearInterval(IndexInterval);
  }, [increaseIndex]);

  return (
    <div className="home">
      <div className="home__title">
        <p className="">Full</p>
        <p className="">Name</p>
      </div>
      <div className="home__subtitle">
        <p className="">I'm</p>
        <div className="home__subtitle__value">
          {arr[index]}&nbsp;
          <div className="home__subtitle__border">|</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
