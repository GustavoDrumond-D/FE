import React, { useState } from 'react';

function MyForm2() {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Endereço: ${address.street}, ${address.city}, ${address.state}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rua:
        <input 
          type="text" 
          name="street" 
          value={address.street} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Cidade:
        <input 
          type="text" 
          name="city" 
          value={address.city} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Estado:
        <input 
          type="text" 
          name="state" 
          value={address.state} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default MyForm2;
