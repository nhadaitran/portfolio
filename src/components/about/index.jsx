import React from "react";
import style from "./styles.scss";
import Image from "../../assets/images/image.png";
import PersonIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/MailOutline";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkOutlined";
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
        This is a&nbsp;
        <p className="about__section__content--hightlight">title</p>
      </span>
      <span className="about__section__content__subtitle">
        This is a&nbsp;
        <p className="about__section__content--hightlight">subtitle</p>
      </span>
      <span className="about__section__content__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
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
          <PhoneAndroidIcon />
          <div className="about__section__content__info__content">
            <p className="about__section__content__info__content__title">
              Phone:
            </p>
            <p className="about__section__content__info__content__subtitle">
              037 &nbsp; xxx &nbsp; xxxx
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
