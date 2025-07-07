import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const API_URL = "https://providers-67no.onrender.com"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-hero">
        <h2>Let's Connect</h2>
        <p>We'd love to hear from you — whether it's a question, a partnership, or a prayer request.</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>

          {/* Status Feedback */}
          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <h3>Visit Us</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5206483432853!2d-71.80743654244836!3d42.27928341443707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40657243281c5%3A0x13023378e56db156!2s173%20Grove%20St%2C%20Worcester%2C%20MA%2001605%2C%20USA!5e0!3m2!1sen!2sgh!4v1750720267654!5m2!1sen!2sgh"
            width="100%"
            height="250"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>

          <div className="info-text">
            <p><strong>Address:</strong> 173 Grove St, Worcester, MA 01605, USA</p>
            <p><strong>Phone:</strong> +1(774) 994-4723</p>
            <p><strong>Email:</strong> <a href="mailto:providersmissions57@gmail.com">providersmissions57@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
