"use client";

import { useState } from "react";
import { UploadCloud, ChevronDown, Minus, Plus } from "lucide-react";
import { usePedido } from "@/context/PedidoContext";

const tamanioPapel = [
  { valor: "A4", label: "A4 (210 × 297 mm)" },
  { valor: "A5", label: "A5 (148 × 210 mm)" },
  { valor: "A3", label: "A3 (297 × 420 mm)" },
  { valor: "Carta", label: "Carta (216 × 279 mm)" },
  { valor: "Oficio", label: "Oficio (216 × 330 mm)" },
];

const tipoPapel = [
  { valor: "Bond", label: "Bond 80g/m²" },
  { valor: "Opalina", label: "Opalina 180g/m²" },
  { valor: "Couche", label: "Couché 150g/m²" },
  { valor: "Reciclado", label: "Reciclado 75g/m²" },
];

const acabadoPapel = [
  { valor: "Mate", label: "Mate" },
  { valor: "Brillante", label: "Brillante" },
  { valor: "Satinado", label: "Satinado" },
  { valor: "Texturizado", label: "Texturizado" },
];

const calidadPapel = [
  { valor: "Económica", label: "Económica" },
  { valor: "Estándar", label: "Estándar" },
  { valor: "Alta Calidad", label: "Alta Calidad" },
  { valor: "Premium", label: "Premium" },
];

export default function PedidosForm() {
  const { pedido, actualizar } = usePedido();

  const [abiertoTamanio, setAbiertoTamanio] = useState(false);
  const [abiertoTipo, setAbiertoTipo] = useState(false);
  const [abiertoAcabado, setAbiertoAcabado] = useState(false);
  const [abiertoCalidad, setAbiertoCalidad] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      actualizar("archivo", file.name);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">
          Formulario de Pedido
        </h2>
        <p className="text-gray-600 mt-1">
          Complete los detalles de su impresión
        </p>
      </div>

      <form className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subir Archivo
          </label>
          <label className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer block">
            <UploadCloud className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 mb-2">
              Arrastra tu archivo aquí o{" "}
              <span className="text-blue-500 font-medium">
                haz clic para seleccionar
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Formatos: PDF, JPG, PNG, DOC (Max. 50MB)
            </p>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamaño de Papel
            </label>
            <button
              type="button"
              onClick={() => setAbiertoTamanio(!abiertoTamanio)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
            >
              {pedido.tamano}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {abiertoTamanio && (
              <div className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left">
                {tamanioPapel.map((opcion) => (
                  <button
                    key={opcion.valor}
                    type="button"
                    onClick={() => {
                      actualizar("tamano", opcion.valor);
                      setAbiertoTamanio(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors first:rounded-t last:rounded-b"
                  >
                    {opcion.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                type="button"
                className="p-2 hover:bg-gray-50 transition-colors"
                onClick={() =>
                  actualizar("cantidad", Math.max(1, pedido.cantidad - 1))
                }
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <input
                type="number"
                value={pedido.cantidad}
                onChange={(e) =>
                  actualizar(
                    "cantidad",
                    Math.max(1, Number(e.target.value) || 1)
                  )
                }
                className="flex-1 px-4 py-2 text-center border-none focus:ring-0 focus:outline-none"
              />
              <button
                type="button"
                className="p-2 hover:bg-gray-50 transition-colors"
                onClick={() => actualizar("cantidad", pedido.cantidad + 1)}
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Orientación
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="orientacion"
                  value="vertical"
                  checked={pedido.orientacion === "vertical"}
                  onChange={(e) => actualizar("orientacion", e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center mr-2 ${
                    pedido.orientacion === "vertical"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {pedido.orientacion === "vertical" && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                </div>
                <span className="text-sm text-gray-700">Vertical</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="orientacion"
                  value="horizontal"
                  checked={pedido.orientacion === "horizontal"}
                  onChange={(e) => actualizar("orientacion", e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center mr-2 ${
                    pedido.orientacion === "horizontal"
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {pedido.orientacion === "horizontal" && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                </div>
                <span className="text-sm text-gray-700">Horizontal</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Papel
            </label>
            <button
              type="button"
              onClick={() => setAbiertoTipo(!abiertoTipo)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
            >
              {pedido.tipoPapel}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            {abiertoTipo && (
              <div className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left">
                {tipoPapel.map((opcion) => (
                  <button
                    key={opcion.valor}
                    onClick={() => {
                      actualizar("tipoPapel", opcion.valor);
                      setAbiertoTipo(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors first:rounded-t last:rounded-b"
                  >
                    {opcion.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Acabado
            </label>
            <button
              type="button"
              onClick={() => setAbiertoAcabado(!abiertoAcabado)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
            >
              {pedido.acabado}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            {abiertoAcabado && (
              <div className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left">
                {acabadoPapel.map((opcion) => (
                  <button
                    key={opcion.valor}
                    onClick={() => {
                      actualizar("acabado", opcion.valor);
                      setAbiertoAcabado(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors first:rounded-t last:rounded-b"
                  >
                    {opcion.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Calidad
            </label>
            <button
              type="button"
              onClick={() => setAbiertoCalidad(!abiertoCalidad)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
            >
              {pedido.calidad}
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            {abiertoCalidad && (
              <div className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left">
                {calidadPapel.map((opcion) => (
                  <button
                    key={opcion.valor}
                    onClick={() => {
                      actualizar("calidad", opcion.valor);
                      setAbiertoCalidad(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors first:rounded-t last:rounded-b"
                  >
                    {opcion.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Opciones Adicionales
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pedido.dobleFaz}
                onChange={(e) => actualizar("dobleFaz", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                  pedido.dobleFaz
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {pedido.dobleFaz && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">
                Impresión a doble cara
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pedido.encuadernado}
                onChange={(e) => actualizar("encuadernado", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                  pedido.encuadernado
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {pedido.encuadernado && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">Encuadernado</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pedido.perforado}
                onChange={(e) => actualizar("perforado", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                  pedido.perforado
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {pedido.perforado && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">Perforado</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pedido.grapado}
                onChange={(e) => actualizar("grapado", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                  pedido.grapado
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {pedido.grapado && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">Grapado</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={pedido.delivery}
                onChange={(e) => actualizar("delivery", e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mr-3 ${
                  pedido.delivery
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {pedido.delivery && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">
                Entrega urgente (+€5.00)
              </span>
            </label>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información de Entrega
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="María González Rodríguez"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+34 612 345 678"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="maria.gonzalez@email.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección de Entrega
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Calle Mayor 123, 2º A, 28001 Madrid"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Preferida
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hora Preferida
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comentarios Especiales
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Instrucciones adicionales para la entrega..."
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
