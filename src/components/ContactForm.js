import React, { useState } from "react";
import "./ContactFormStyle.css";

function ContactForm() {
  const [userInpValue, setUserInpValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = userInpValue;

  const changeHandler = (e) => {
    setUserInpValue({
      ...userInpValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("All fields are required.. !");
    } else {
      setUserInpValue({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.log(userInpValue);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFinalSubmit}>
        <h1>Write a message to us !</h1>
        <input
          placeholder="Name.."
          name="name"
          value={name}
          onChange={(e) => changeHandler(e)}
        />
        <input
          placeholder="Email.."
          name="email"
          value={email}
          onChange={(e) => changeHandler(e)}
        />
        <input
          placeholder="Subject.."
          name="subject"
          value={subject}
          onChange={(e) => changeHandler(e)}
        />
        <textarea
          name="message"
          value={message}
          placeholder="Messsage.."
          rows="3"
          style={{ maxWidth: "100%", minHeight: "20%" }}
          onChange={(e) => changeHandler(e)}
        ></textarea>
        <button type="submit" value="Submit" id="submit-btn">
          Send Messsage
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
