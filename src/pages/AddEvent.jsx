import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    eventType: 'Birthday Party',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your request for a "${formData.eventType}" has been submitted.`);
    setFormData({ name: '', contact: '', email: '', eventType: 'Birthday Party' });
  };

  return (
    <div className="form-container">
      <h2>Add Your Event Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Contact:</label>
        <input name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Event Type:</label>
        <select name="eventType" value={formData.eventType} onChange={handleChange}>
          <option>Birthday Party</option>
          <option>Wedding</option>
          <option>Get Together</option>
          <option>Cocktail Party</option>
          <option>Formal Meetings</option>
          <option>Friends Meetup</option>
          <option>Family Meetups</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default AddEvent;
