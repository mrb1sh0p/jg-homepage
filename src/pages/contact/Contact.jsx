import "./Contact.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Links from "../links/Links";

const Contact = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container contact-page">
      <section className="contact-header">
        <h1>{t("contact")}</h1>
        <p>{t("contact_text")}</p>
      </section>

      <section className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              {t("contact_form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact_form.name")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              {t("contact_form.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact_form.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="sr-only">
              {t("contact_form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact_form.message")}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">{t("contact_form.send")}</button>
        </form>
      </section>

      <section className="social-media">
        <Links />
      </section>
    </div>
  );
};

export default Contact;
