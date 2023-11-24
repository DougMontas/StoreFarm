import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import dotenv from "dotenv";
dotenv.config();

export const DiscountForm = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [code, setCode] = useState("LOYALTY15OFF");
  let [to_Name, setTo_Name] = useState("myredlandsfarm@gmail.com");

  let SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  let PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  let TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  let handleSubmit = (e) => {
    e.preventDefault();
    let params = {
      to_Name: to_Name,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    let getClass = document.getElementById("code");
    getClass.className = "discountcodeshow";
    return code;
  };

  return (
    <>
      <div className="container-fluid discountform">
        <form onSubmit={handleSubmit} className="form-horizontal">
          <div className="label">
            <label htmlFor="firstName">*First Name:</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="label">
            <label htmlFor="lastName">*Last Name:</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="label">
            <label htmlFor="email">*Email:</label>
          </div>
          <div className="input">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input type="submit" className="submit" value="Submit" />
          </div>
          <div className="discountcode" id="code">
            <h1 className="code" id="code">
              <a
                href="https://myredlandsfarm.etsy.com?coupon=LOYALTY15OFF"
                target="_blank"
                rel="noreferrer"
              >
                {code}
              </a>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
};
