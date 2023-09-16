import React, { useState } from "react";

const Form = () => {
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
  });

  
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
      fullName: "",
      email: "",
    };

    
    if (formData.fullName.length < 6) {
      isValid = false;
      errors.fullName = "Nombre completo debe tener al menos 6 caracteres";
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      isValid = false;
      errors.email = "Formato de correo electrónico inválido";
    }

    setFormErrors(errors);
    return isValid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
     
      alert("Formulario válido. Datos enviados.");
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
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
    </div>
  );
};

export default Form;
