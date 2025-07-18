import React, { useState, useEffect } from 'react';
import '../styles/contactForm.css';
import '../styles/Layout.css';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus('Message sent!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send');
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Banner with Adyar House image */}
      <div className="contact-banner zoom-in">
        <img src="/bg.jpg" alt="Background" />
      </div>

      {/* Contact form section */}
      <div className="contact-section fade-in-up">
        <h2>CONTACT US</h2>
        <p className="form-subtitle">
          Let us know what you think! In order to provide better service, please do not hesitate to give us your feedback. Thank you.
        </p>

        <form className="modern-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group fade-delay-1">
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group fade-delay-2">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group full-width fade-delay-3">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group full-width fade-delay-4">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} />
          </div>

          <div className="form-group full-width fade-delay-5">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="fade-delay-6">SUBMIT</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
