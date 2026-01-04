"use client";

import { Trash2 } from "lucide-react";

export function EliminarUsuarioModal({ usuario, onConfirmar, onCancelar }) {
  console.log(usuario);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onCancelar}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mr-4">
            <Trash2 className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Confirmar Eliminación
          </h3>
        </div>
        <p className="text-gray-600 mb-6">
          ¿Estás seguro de que deseas eliminar al usuario{" "}
          <span className="font-medium text-gray-900">{usuario.nombre}</span>?
          Esta acción no se puede deshacer.
        </p>
        <div className="flex space-x-3">
          <button
            onClick={onCancelar}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
