// src/components/Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!phonePattern.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      // Perform form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          className={ errors.email ? `error_field` : null}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete={false}
          />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          className={ errors.password ? `error_field` : null}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={false}
          />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          className={ errors.phone ? `error_field` : null}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete={false}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;