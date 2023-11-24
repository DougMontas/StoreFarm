import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [comment, setComment] = useState("");
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
      comment: comment,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
      .then((res) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid contact-form">
        <form onSubmit={handleSubmit} className="form-horizontal">
          <div className="label">
            <label htmlFor="firstName">*First Name:</label>
          </div>
          <div className="input">
            <input
              type="text"
              id="firstName"
              required="required"
              onChange={(e) => setFirstName(e.target.value)}
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
              required="required"
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
              required="required"
            />
          </div>

          <div className="label">
            <label htmlFor="comments">Comments:</label>
          </div>
          <div className="inputcomments">
            <textarea
              type="text"
              id="comments"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
