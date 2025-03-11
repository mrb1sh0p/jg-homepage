import "./about.css";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const About = () => {
  const { t } = useTranslation("about");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    setEmail("");
  };

  return (
    <div className="container about-page">
      <section className="about-section">
        <h2>{t("about")}</h2>
        <p>{t("about_text")}</p>
      </section>

      <section className="letter-section">
        <h2>{t("letter")}</h2>
        <p>{t("letter_text")}</p>
        <form className="form-letter" onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="user@gmail.com"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default About;
