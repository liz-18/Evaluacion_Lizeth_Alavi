import React, { useState } from 'react';
import { useAppContext } from '../ContextGlobal'; 

import './styles-light.css'; 
import './styles-dark.css'; 
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullName: '',
      email: '',
    };

    if (formData.fullName.length < 6) {
      isValid = false;
      errors.fullName = 'Nombre completo debe tener al menos 6 caracteres';
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      isValid = false;
      errors.email = 'Formato de correo electrónico inválido';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos pronto vía correo electrónico.`);
      
      setFormData({
        fullName: '',
        email: '',
      });
    }
  };

  const { state } = useAppContext(); 

  return (
    <div className={`container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions, and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.fullName}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.email}</div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Contact;

