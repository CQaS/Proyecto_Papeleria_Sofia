"use client";
import { useState } from "react";

export default function AdminModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      window.location.href = "/admin";
    } else {
      setError("Usuario o contraseña incorrectos");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary-custom text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-custom/90 transition-colors whitespace-nowrap"
      >
        Iniciar Admin
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/95 rounded-xl w-full max-w-md mx-4 shadow-2xl transform transition-all">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Iniciar sesión
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Acceso exclusivo para administradores
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full transition-colors"
                >
                  <i className="ri-close-line ri-lg"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Usuario
                  </label>
                  <div className="relative">
                    <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-custom/30"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <i className="ri-lock-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-custom/30"
                      required
                    />
                  </div>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <button
                  type="submit"
                  className="w-full bg-primary-custom text-white py-4 rounded-lg font-medium hover:bg-primary-custom/90 transition-colors whitespace-nowrap flex items-center justify-center space-x-2"
                >
                  <i className="ri-login-circle-line"></i>
                  <span>Ingresar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
