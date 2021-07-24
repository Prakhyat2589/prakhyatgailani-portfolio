import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
const Emailform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [statusMessage, setStatusMessage] = useState();

  const sendEmail = (data, e) => {
    const statusMessage = document.querySelector(".status-message");
    emailjs
      .sendForm(
        "gmail",
        "template_py8znyk",
        "#emailForm",
        "user_GN42g3eypbcXNDP0LhMjW"
      )
      .then(
        (result) => {
          setStatusMessage("Message sent!");
          statusMessage.className = "status-message success";
          setTimeout(() => {
            statusMessage.className = "status-message";
          }, 5000);
          console.log(result.text);
        },
        (error) => {
          setStatusMessage("Failed to send message! Please try 'Let's Talk'");
          statusMessage.className = "status-message failure";
          setTimeout(() => {
            statusMessage.className = "status-message";
          }, 5000);
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <form
      id="emailForm"
      className="emailForm"
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="status-message">{statusMessage}</div>

      <input
        type="text"
        placeholder="Name"
        name="from_name"
        {...register("from_name", { required: true })}
      />
      {errors.from_name && (
        <span className="error">Please enter your name</span>
      )}
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        {...register("user_email", { required: true })}
      />
      {errors.user_email && (
        <span className="error">Please enter your email</span>
      )}
      <textarea
        type="text"
        placeholder="Your Message"
        name="message"
        minLength="10"
        {...register("message", { required: true })}
      />
      {errors.message && (
        <span className="error">Please enter minimum 10 characters</span>
      )}
      <input
        className="btn btn--primary"
        type="submit"
        // onClick={handleSubmit()}
        value="Send"
      />
    </form>
  );
};
export default Emailform;
