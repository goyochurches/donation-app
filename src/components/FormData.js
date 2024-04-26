import React, { useState } from "react";

const FormData = ({ setStep, dataFilled, setDataFilled }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    numberSelected: dataFilled,
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellidos: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellidos, email } = formData;
    let newErrors = {};

    if (!nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!apellidos.trim()) {
      newErrors.apellidos = "Los apellidos son obligatorios";
    }

    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "El email no es válido";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setDataFilled(formData);
      setStep(3);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Formulario de donación</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`form-control ${errors.nombre && "is-invalid"}`}
          />
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className={`form-control ${errors.apellidos && "is-invalid"}`}
          />
          {errors.apellidos && (
            <div className="invalid-feedback">{errors.apellidos}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email && "is-invalid"}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group text-center">
          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAAYZkyQ5W7KfCexn"
          ></div>
        </div>
        <div className="form-group text-center m-4">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormData;
