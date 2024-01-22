import { useState, useEffect } from "react";
import "./Newsletter.scss";

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (status === "success") clearFields();
    setTimeout(() => {
      setResponse("");
    }, 6000);
  }, [status]);

  useEffect(() => {
    if (status === "sending") {
      setResponse("Sending");
    } else if (status === "error" || status === "success") {
      setResponse(message);
    }
  }, [status, message]);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="newsletter-bx">
      <div className="newsletter-bx-left">
        <div className="heading">
          {width <= 768 ? (
            <h3> Subscribe to our Newsletter </h3>
          ) : (
            <div>
              <h3> Subscribe to our </h3>
              <h3> Newsletter </h3>
            </div>
          )}
        </div>
      </div>

      <div className="newsletter-bx-right">
        <form className="new-email-bx" onSubmit={handleSubmit}>
          <div className="new-email-bx-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <button type="submit"> Submit </button>
          </div>

          <div className="fixed-height">
            {status === "sending" && <p className="sending"> {response} </p>}
            {status === "error" && <p className="error"> {response} </p>}
            {status === "success" && <p className="success"> {response} </p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
