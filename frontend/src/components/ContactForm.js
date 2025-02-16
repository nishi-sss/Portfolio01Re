import React, { useState } from 'react';
import { handleSubmit } from '../api/mail';  // mail.js から関数をインポート！

function Form() {
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
    <form onSubmit={handleSubmit}> {/* mail.js の handleSubmit を使う！ */}
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>Message:</label>
      <textarea name="message" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

