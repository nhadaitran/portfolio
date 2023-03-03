import React from "react";
import style from "./styles.scss";
const Project = (props) => {
  return (
    <div className="project" ref={props.prop}>
      <div className="project__title">
        <p className="">Projects</p>
      </div>
      <ProjectSection />
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
        className="project__section--active"
        onMouseOver={() => updateState(1)}
        onMouseLeave={() => updateState(0)}
      >
        <div className={`${`project__section__content`}${state.a && `--open`}`}>
          a
        </div>
        <div className="project__section__image">a</div>
      </div>
      <div className="project__section--deactive"></div>
      <div className="project__section--deactive"></div>
      <div
        className="project__section--active"
        onMouseOver={() => updateState(2)}
        onMouseLeave={() => updateState(0)}
      >
        <div
          className={`${`project__section__content`}${state.b && `--openLeft`}`}
        >
          a
        </div>
        <div className="project__section__image">a</div>
      </div>
      <div
        className="project__section--active"
        onMouseOver={() => updateState(3)}
        onMouseLeave={() => updateState(0)}
      >
        <div className={`${`project__section__content`}${state.c && `--open`}`}>
          a
        </div>
        <div className="project__section__image">a</div>
      </div>
      <div className="project__section--deactive"></div>
    </div>
  );
};

export default Project;
