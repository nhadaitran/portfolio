import React from "react";
import style from "./styles.scss";
import Image from "../../assets/images/image.png";
import PersonIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/MailOutline";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CV from "../../assets/files/cv.pdf";
const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <p className="">About</p>
      </div>
      <div className="about__section">
        <div
          className="about__section__image"
          style={{
            backgroundImage: `url(${Image})`,
          }}
        ></div>
        <AboutContent />
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="about__section__content">
      <span className="about__section__content__title">
        This is a story about&nbsp;
        <b>me</b>
      </span>
      <span className="about__section__content__subtitle">
        So, My name is Tran Dai&nbsp;
        <b>Nha</b>, I'm a ReactJS Dev from now.
      </span>
      <span className="about__section__content__description">
        <p>
          With me, just focusing on theory can't make myself better, I choose to
          learn by working on personal projects. I can tell you if I don't know
          how to answer your questions, but I know how to find the answer and I
          will find it. In the future, I want to be an efficient full-stack
          developer.
        </p>
        <br />
        <p>
          Want to know more about ? Here my{" "}
          <a href={CV} target="_blank" rel="noreferrer">
            resume
          </a>{" "}
          👈
        </p>
      </span>
      <div className="about__section__content__info">
        <div className="">
          <PersonIcon />
          <div className="about__section__content__info__content">
            <p className="about__section__content__info__content__title">
              Name:
            </p>
            <p className="about__section__content__info__content__subtitle">
              Tran Dai Nha
            </p>
          </div>
        </div>
        <div className="">
          <MailIcon />
          <div className="about__section__content__info__content">
            <p className="about__section__content__info__content__title">
              Email:
            </p>
            <p className="about__section__content__info__content__subtitle">
              nhadaitran@gmail.com
            </p>
          </div>
        </div>
        <div className="">
          <PhoneAndroidIcon />
          <div className="about__section__content__info__content">
            <p className="about__section__content__info__content__title">
              Phone:
            </p>
            <p className="about__section__content__info__content__subtitle">
              037 xxx xxxx
            </p>
          </div>
        </div>
        <div className="">
          <MapsHomeWorkIcon />
          <div className="about__section__content__info__content">
            <p className="about__section__content__info__content__title">
              Address:
            </p>
            <p className="about__section__content__info__content__subtitle">
              Ho Chi Minh city, Viet Nam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
