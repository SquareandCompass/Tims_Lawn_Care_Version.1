// src/pages/Contact.js
// Contact component: Provides contact information and a contact form

import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.contactInfo}>
        <p className={styles.contactItem}>Phone: (555) 123-4567</p>
        <p className={styles.contactItem}>Email: info@timslawncare.com</p>
        <p className={styles.contactItem}>Address: 123 Green Street, Lawn City, State 12345</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;