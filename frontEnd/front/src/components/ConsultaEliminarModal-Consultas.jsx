"use client";

import { AlertCircle, X } from "lucide-react";

export default function ConsultaEliminarModal({
  consulta,
  onCerrar,
  onConfirmar,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Confirmar Eliminación
            </h3>
            <p className="text-sm text-gray-500">
              Esta acción no se puede deshacer
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          ¿Está seguro de que desea eliminar la consulta{" "}
          <strong>{consulta.id}</strong>? Esta acción eliminará permanentemente
          toda la información asociada.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCerrar}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Eliminar Consulta
          </button>
        </div>
      </div>
    </div>
  );
}
