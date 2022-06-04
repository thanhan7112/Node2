import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

import TextareaField from "./TextareaField";
import InputField from "./InputField";
import axios from "axios";
import Footer from "../Pages/Footer/Footer";
export const Email = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/api/contact', values)
    emailjs
      .send("service_4phmldr", "template_1pkas5v", values, "KjdY0rzPB0RKzYVpR")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          setStatus("ERROR");
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS" || status === "ERROR") {
      setTimeout(() => {
        setStatus("");
      }, 3000); //3s
    }
  }, [status]);

  const handleChange = (e) => {

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
};

const handleDeleteMessage = (e) => {
  e.preventDefault();
  setValues({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
};
return (
  <section className="contact__section">
    {status === "SUCCESS" && renderAlertSuccess()}
    {status === "ERROR" && renderAlertError()}
    <div className="container contact__container">
      <h2 className="contact__heading">Contact Us</h2>
      <h2>We'd Love to Help!</h2>
      <p>
        We Like to create things with fun, open-minded people.Feel free to say
        hello!
      </p>
      <div className="row">
        <div className="col-md-6">
          <button
            className="btn contact__btn--delete"
            onClick={handleDeleteMessage}
          >
            <FontAwesomeIcon
              className="contact__icon--delete"
              icon={faDeleteLeft}
            />
            Delete content
          </button>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={values.fullName}
              handleChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
              value={values.email}
              handleChange={handleChange}
            />
            <InputField
              type="text"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={values.phoneNumber}
              handleChange={handleChange}
            />

            <TextareaField
              placeholder="Message"
              value={values.message}
              handleChange={handleChange}
              name="message"
            />
            <center>
              <button
                className="btn btn-info contact__btn--submit"
                type="submit"
              >
                Submit
              </button>
            </center>
            <br />
          </form>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 contact__right">
          <br />
          <p className="contact__text">
            <FontAwesomeIcon className="contact__icon" icon={faLocationDot} />
            &nbsp;&nbsp; 33 Xo Viet Nghe Tinh
          </p>
          <p className="contact__text">
            <FontAwesomeIcon className="contact__icon" icon={faPhone} />
            &nbsp;&nbsp; 0316285445
          </p>
          <p className="contact__text">
            <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />
            &nbsp;&nbsp; tuan48594@donga.edu.vn
          </p>
          <hr className="contact__hr-right" />

          <div className="contact__media">
            <ul className="list-unstyled contact__ul">
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    className="contact__media-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    className="contact__media-icon"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    className="contact__media-icon"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    className="contact__media-icon"
                    icon={faGooglePlusG}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  {/* <i className="fab fa-youtube contact__media-icon"></i> */}
                  <FontAwesomeIcon
                    className="contact__media-icon"
                    icon={faYoutube}
                  />
                </a>
              </li>
            </ul>
          </div>
          <br />
          <p>Web Design by IT company</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
);
};

const renderAlertSuccess = () => (
  <div className="px-3 py-2 mt-2 rounded mb-5 text-center contact__messsage-submitted">
    <FontAwesomeIcon className="contact__icon--success" icon={faCheck} />
    <p className="contact__text--success">
      Your message submitted successfully!!!
    </p>
  </div>
);

const renderAlertError = () => (
  <div className="px-3 py-2 mt-2 rounded mb-5 text-center contact__messsage-submitted">
    <FontAwesomeIcon
      className="contact__icon--error"
      icon={faCircleExclamation}
    />
    <p className="contact__text--error">
      Error! An error occurred. Please try again later!!!
    </p>
  </div>
);