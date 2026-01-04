"use client";

import { Mail, Phone, Calendar, Trash2 } from "lucide-react";

export function UsuariosCard({ user, onEliminar }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
            {user.apellido[0]}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {user.nombre} {user.apellido}
            </h3>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                user.estado === "ACTIVO"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {user.estado === "ACTIVO" ? "Activo" : "Inactivo"}
            </span>
          </div>
        </div>
        <button
          onClick={() => onEliminar(user)}
          className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-gray-400" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-gray-400" />
          <span>{user.telefono}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Registrado: {user.creadoEn}</span>
        </div>
      </div>
    </div>
  );
}
