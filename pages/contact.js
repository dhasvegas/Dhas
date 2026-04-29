import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend or email service
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p className={styles.success}>
          Thanks for reaching out! We will get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}
