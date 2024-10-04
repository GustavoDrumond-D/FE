// src/Components/MyForm3.jsx
import React, { useState } from 'react';

function MyForm3() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${contact.name}, E-mail: ${contact.email}, Telefone: ${contact.phone}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input 
          type="text" 
          name="name" 
          value={contact.name} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        E-mail:
        <input 
          type="email" 
          name="email" 
          value={contact.email} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Telefone:
        <input 
          type="tel" 
          name="phone" 
          value={contact.phone} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default MyForm3;
