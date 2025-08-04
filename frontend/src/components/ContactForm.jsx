import React, { useState } from 'react';
import '../styles/contactForm.css';
import '../styles/Layout.css';
import Footer from './footer';

function ContactForm() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkin: '',
    checkout: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await fetch(`${API_URL}/api/contact`, {
        // await fetch("https://adyarhouse.onrender.com/api/contact",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus('Message sent!');
      setForm({ name: '', email: '', phone: '', subject: '',checkin: '',checkout: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-banner zoom-in">
        <img src="/bg.jpg" alt="Background" />
      </div>


      <div className="contact-main fade-in-up">
        <div className="contact-info">
          <h2 style={{color:'#7f6644'}}>CONTACT US</h2>
          <p className="address-block">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              No. 66, 5th Street, Padmanabha Nagar,
              Adyar, Chennai – 600020
            </span>
          </p>
          <p><i className="fas fa-envelope"></i><a href="mailto:theadyarhouse@gmail.com">theadyarhouse@gmail.com</a></p>
          <p><i className="fas fa-phone"></i><a href="tel:+919500615567">+91 95006 15567</a></p>
          <p>
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/theadyarhouse" target="_blank" rel="noopener noreferrer">
              @theadyarhouse
            </a>
          </p>
        </div>

 
      <div className="contact-map">
        <iframe
          title="Adyar House Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1181547476034!2d80.2421364!3d13.0042214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678a532bf911%3A0x4fc05492f7007dd2!2sThe%20Adyar%20House%20-%20Boutique%20Homestays!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      </div>

      <div className="contact-form-container fade-in-up">
        <h2 style={{textAlign:'center', color: '#7f6644',fontSize:'24px'}}>ENQUIRE US</h2>
        <form className="modern-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Check-in Date</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Check-out Date</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit">SUBMIT</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
        <Footer />
    </div>
  
  );
}

export default ContactForm;
