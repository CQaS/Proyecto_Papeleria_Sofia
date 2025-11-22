"use client";

import { useState } from "react";
import { toast } from "./ToastContainer";
import { postConsulta } from "@/app/routes/consultas.routes";

export default function ContactoSection() {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleTextareaChange = (e) => {
    setCharCount(e.target.value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const newErrors = {};

    // 2. Validaciones manuales
    if (!data.nombre || data.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre es requerido y debe ser válido.";
    }

    // Regex simple para email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Ingresa un email válido.";
    }

    // Regex para solo números
    if (
      !data.telefono ||
      !/^\d+$/.test(data.telefono) ||
      data.telefono.length < 7
    ) {
      newErrors.telefono = "El teléfono debe contener solo números (mínimo 7).";
    }

    if (!data.mensaje || data.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje es muy corto (mínimo 10 caracteres).";
    }

    // 3. Si hay errores, detenemos el envío
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    console.log(data);

    const consulta = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      mensaje: data.mensaje,
    };

    formData.append("consulta", JSON.stringify(consulta));

    try {
      const respuesta = await postConsulta(formData);
      console.log(respuesta);

      if (respuesta.success) {
        toast(
          "success",
          "¡Pedido Enviado!",
          "Te llegará un email con la confirmación."
        );
        setCharCount(0);
      } else {
        toast("error", "Error", "No se pudo enviar la consulta.");
      }
    } catch (error) {
      console.log(error);
      toast("error", "Error al enviar el pedido.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-customer-service-line ri-2x text-blue-700"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Tienes alguna consulta?
            </h2>
            <p className="text-gray-600">
              Estamos aquí para ayudarte. Envíanos tu mensaje y te responderemos
              lo antes posible.
            </p>
          </div>

          {/* Formulario */}
          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                />
                {errors.nombre && (
                  <span className="text-red-500 text-sm">{errors.nombre}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
              />
              {errors.telefono && (
                <span className="text-red-500 text-sm">{errors.telefono}</span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                maxLength={500}
                required
                onChange={handleTextareaChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm resize-none"
              />
              {errors.mensaje && (
                <span className="text-red-500 text-sm">{errors.mensaje}</span>
              )}
              <div className="text-right text-xs text-gray-500 mt-1">
                <span>{charCount}</span>/500 caracteres
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-500 transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
