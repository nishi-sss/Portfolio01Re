import React, { useState } from 'react';
import { handleSubmit } from '../api/mail';  // mail.js の送信関数をインポート！

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}> {/* ✅ `handleSubmit` に `formData` を渡す！ */}
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      
      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;

