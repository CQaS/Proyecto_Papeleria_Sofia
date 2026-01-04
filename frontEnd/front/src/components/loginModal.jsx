"use client";

import { login as loginApi } from "@/app/routes/login.routes";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Por favor, ingresa un correo válido.";
    }

    if (!data.password || data.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await loginApi(data.email, data.password);
      console.log(response);

      if (response.success) {
        login(response.user, response.accessToken);

        console.log("Session iniciada con exito");
        onClose();
        router.push("/admin");
      } else {
        console.log("Session NO iniciada con exito");
        setErrors({ message: response.message });
      }
    } catch (error) {
      console.log(error);
      setErrors({ message: "Error de conexión con el servidor." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose} // Cierra al hacer clic en el fondo oscuro
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">
            Iniciar sesión
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <i className="ri-close-line ri-lg text-gray-500"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label
              htmlFor="loginEmail"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="loginEmail"
              name="email"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="loginPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full bg-blue-700 text-white px-6 py-3 !rounded-button font-medium hover:bg-blue-900 transition-colors whitespace-nowrap
              ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed" // Estilo si está cargando
                  : "bg-blue-600 hover:bg-blue-700" // Estilo normal
              }`}
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Ingresando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
          <div
            className={`p-2 rounded mt-2 text-center text-red-700 bg-red-100 ${
              errors.message ? "block" : "hidden"
            }`}
          >
            {errors.message}
          </div>
        </form>

        <div className="px-6 pb-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link href="#" className="text-primary hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
