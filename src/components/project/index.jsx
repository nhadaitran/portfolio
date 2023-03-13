import React from "react";
import style from "./styles.scss";
import AookLogo from "../../assets/images/aooklogo.svg";
import StubdsLogo from "../../assets/images/stubdslogo.svg";
import ReveologueLogo from "../../assets/images/reveloguelogo.png";
import AookThumbnail from "../../assets/images/aook.png";
import StubdsThumbnail from "../../assets/images/stubds.png";
import ReveologueThumbnail from "../../assets/images/revelogue.png";
const Project = (props) => {
  return (
    <div className="project" ref={props.prop}>
      <div className="project__title">
        <p className="">Projects</p>
      </div>
      {/* <ProjectSection /> */}
    </div>
  );
};

const ProjectSection = () => {
  const [state, setState] = React.useState({
    a: false,
    b: false,
    c: false,
  });

  const updateState = React.useCallback((data) => {
    data === 1
      ? setState((state) => ({ ...state, ...{ a: true } }))
      : setState((state) => ({ ...state, ...{ a: false } }));
    data === 2
      ? setState((state) => ({ ...state, ...{ b: true } }))
      : setState((state) => ({ ...state, ...{ b: false } }));
    data === 3
      ? setState((state) => ({ ...state, ...{ c: true } }))
      : setState((state) => ({ ...state, ...{ c: false } }));
  }, []);
  return (
    <div className="project__section">
      <div
        className="project__section__item"
        onMouseOver={() => updateState(1)}
        onMouseLeave={() => updateState(0)}
      >
        <div
          className="project__section__item__thumbnail"
          style={{ backgroundImage: `url(${AookThumbnail})` }}
        >
          <div className="project__section__item__thumbnail__cover"></div>
          <img src={AookLogo} alt="Aook" className="" />
        </div>
        <div
          className={`${`project__section__item__meta`} ${
            state.a ? `project__section__item__meta--open` : ``
          }`}
        >
          content
        </div>
      </div>
      <div
        className="project__section__item"
        onMouseOver={() => updateState(2)}
        onMouseLeave={() => updateState(0)}
      >
        <div
          className={`${`project__section__item__metaLeft`} ${
            state.b ? `project__section__item__metaLeft--open` : ``
          }`}
        >
          content
        </div>
        <div
          className="project__section__item__thumbnail"
          style={{ backgroundImage: `url(${StubdsThumbnail})` }}
        >
          <div className="project__section__item__thumbnail__cover"></div>
          <img src={StubdsLogo} alt="Stubds" className="" />
        </div>
      </div>
      <div
        className="project__section__item"
        onMouseOver={() => updateState(3)}
        onMouseLeave={() => updateState(0)}
      >
        <div
          className="project__section__item__thumbnail"
          style={{ backgroundImage: `url(${ReveologueThumbnail})` }}
        >
          <div className="project__section__item__thumbnail__cover"></div>
          <img src={ReveologueLogo} alt="Revelogue" className="" />
        </div>
        <div
          className={`${`project__section__item__meta`} ${
            state.c ? `project__section__item__meta--open` : ``
          }`}
        >
          content
        </div>
      </div>
    </div>
  );
};

export default Project;
