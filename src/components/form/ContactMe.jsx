import React, { useState } from "react";
import axios from "axios";

const ContactMe = () => {
  const [isError, setIsError] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://34.225.132.160:8002/api/",
        {email: email}
      );
      setIsError("");
      setSuccessMessage(response.data.message);
      setTimeout(()=>{
        setSuccessMessage("");
        setEmail("");
      },3000)

    } catch (error) {
      console.log("err->", error.message);
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact__me__container">
      {isError ? (<p className="error__message">{isError}</p>) : successMessage? (
        <p className="success__message">{successMessage}</p>
      ): ""}
      <form onSubmit={handleSubmit} className="contact__me__body">
        <input
          required
          type="text"
          className="input__field"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="submit__btn" disabled={isLoading}>
          {isLoading ? <img className="spinner_green" src="spinner_green.svg" alt="loading" /> : "Contact Me"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
