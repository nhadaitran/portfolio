import React from "react";
import style from "./styles.scss";
import PhoneIcon from "@mui/icons-material/PhoneAndroid";
import MailIcon from "@mui/icons-material/MailOutline";
import MapsIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import FbIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = (props) => {
  return (
    <div className="contact" ref={props.prop}>
      <div className="contact__section">
        <div className="contact__section__title">
          <p className="">Contact</p>
        </div>
        <form autoComplete="off" className="contact__section__form">
          <input
            type="text"
            id="contactName"
            name="contactName"
            placeholder="Your Name"
            tabIndex={1}
            className="contact__section__form__input"
          />
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            placeholder="Your Email"
            tabIndex={2}
            className="contact__section__form__input"
          />
          <textarea
            id="contactMessage"
            name="contactMessage"
            rows="5"
            // cols="33"
            placeholder="Message"
            tabIndex={3}
            className="contact__section__form__input contact__section__form__input--textarea"
          />
          <input
            type="submit"
            name="submit"
            placeholder="Submit"
            tabIndex={4}
            className="contact__section__form__submit"
          />
        </form>
        <div className="contact__section__meta">
          <div className="contact__section__meta__title">
            <p className="">Infomation</p>
          </div>
          <div className="contact__section__meta__content">
          <p className=""><MailIcon/>nhadaitran@gmail.com</p>
          <p className=""><PhoneIcon/>037 899 xxxx</p>
          <p className=""><MapsIcon/>Ho Chi Minh city, Viet Nam</p>
          </div>
          <div className="contact__section__meta__link">
          <a href={`https://www.facebook.com/NhaDaiTran`} target="_blank" rel="noreferrer">
            <FbIcon/>
          </a>
          <a href={`https://github.com/nhadaitran`} target="_blank" rel="noreferrer">
            <GitHubIcon/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
