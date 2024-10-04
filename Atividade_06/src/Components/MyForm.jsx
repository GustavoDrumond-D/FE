import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({
    username: '',
    age: '',
    textarea: 'The content of a textarea goes in the value attribute',
    myCar: 'Volvo'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${inputs.username}, Age: ${inputs.age}, Car: ${inputs.myCar}, Textarea: ${inputs.textarea}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Your favorite car:
        <select 
          name="myCar" 
          value={inputs.myCar} 
          onChange={handleChange}
        >
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <br />
      <label>
        Your message:
        <textarea 
          name="textarea" 
          value={inputs.textarea} 
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm;