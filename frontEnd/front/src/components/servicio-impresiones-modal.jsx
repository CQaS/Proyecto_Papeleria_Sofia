"use client";

import { useState } from "react";

export default function ServicioImpresionesModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-secondary-custom text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary-custom/90 transition-colors whitespace-nowrap"
      >
        Pedidos de impresión
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-0">
          <div className="bg-white/95 rounded-xl w-full max-w-xl mx-auto shadow-2xl transform transition-all">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Servicio de impresión
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Complete el formulario para solicitar su servicio
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full transition-colors"
                >
                  <i className="ri-close-line ri-lg"></i>
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="nombreImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre completo
                    </label>
                    <div className="relative">
                      <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="text"
                        id="nombreImpresion"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="telefonoImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono
                    </label>
                    <div className="relative">
                      <i className="ri-phone-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="tel"
                        id="telefonoImpresion"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="emailImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <i className="ri-mail-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="email"
                        id="emailImpresion"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="tipoImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tipo de impresión
                    </label>
                    <div className="relative">
                      <i className="ri-printer-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <select
                        id="tipoImpresion"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30 appearance-none"
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="bn">Blanco y Negro</option>
                        <option value="color">Color</option>
                        <option value="foto">Fotográfica</option>
                        <option value="planos">
                          Planos / Documentos grandes
                        </option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="cantidadImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Cantidad de copias
                    </label>
                    <div className="relative">
                      <i className="ri-stack-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="number"
                        id="cantidadImpresion"
                        min="1"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="detallesImpresion"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Detalles adicionales
                    </label>
                    <div className="relative">
                      <i className="ri-file-text-line absolute left-3 top-3 text-gray-400"></i>
                      <textarea
                        id="detallesImpresion"
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-custom/30"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-secondary-custom text-white py-4 rounded-lg font-medium hover:bg-secondary-custom/90 transition-colors whitespace-nowrap flex items-center justify-center space-x-2"
                  >
                    <i className="ri-send-plane-line"></i>
                    <span>Solicitar servicio</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
