import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      const result = await emailjs.sendForm(
        service_id,
        template_id,
        form.current,
        {
          publicKey: public_key,
        }
      );
      console.log(result.text);
      setMessage("Poruka uspešno poslata!");
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setMessage("Greška pri slanju poruke. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact_form">
      <label>Ime i prezime</label>
      <input
        type="text"
        name="user_name"
        className="form-control mb-3"
        placeholder="Unesite vaše ime i prezime"
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="form-control mb-3"
        placeholder="Unesite vašu email adresu"
        required
      />
      <label>Poruka</label>
      <textarea
        name="message"
        className="form-control mb-3"
        placeholder="Unesite vašu poruku"
        required
      />
      <button type="submit" className="btn-submit" disabled={loading}>
        {loading ? "Slanje..." : "Pošalji"}
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
};
