import { useState, useEffect } from "react";
import contactImg from "./../../assets/Img/contact-img.svg";
import "./contact.scss";
import "animate.css";

const contact = () => {
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    let response = await fetch("https://mailapi-7xjz.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");

    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 300) {
      setStatus({ success: 300, message: "Message Sent Successfuly" });
    } else {
      setStatus({ success: false, message: "Something Went Wrong" });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus({});
    }, 5000);
  }, [status]);

  return (
    <div className="contact" id="contact">
      <div className="contact-img">
        <img src={contactImg} alt="Contact Us" />
      </div>

      <div className="contact-box">
        <h2> Get In Touch </h2>
        <form className="contact-box-form" onSubmit={handleSubmit}>
          <div className="contact-name">
            <input
              type="text"
              value={formDetails.firstname}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstname", e.target.value)}
            />

            <input
              type="text"
              value={formDetails.lastname}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastname", e.target.value)}
            />
          </div>

          <div className="contact-contacts">
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(e) => onFormUpdate("email", e.target.value)}
            />

            <input
              type="phone"
              value={formDetails.phone}
              placeholder="Phone Number"
              onChange={(e) => onFormUpdate("phone", e.target.value)}
            />
          </div>

          <div className="contact-message">
            <textarea
              value={formDetails.message}
              cols="30"
              rows="6"
              placeholder="Message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
          </div>

          <div className="contact-button">
            <button type="submit">
              <span> {buttonText} </span>
            </button>

            {status.message && (
              <p className={status.success === false ? "danger" : "success"}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default contact;
