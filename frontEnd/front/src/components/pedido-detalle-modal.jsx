// src/components/pedidos/OrderDetailsModal.jsx
"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useAuth } from "@/context/AuthContext";
import { actualizarEstadoPedido } from "@/app/routes/pedidos.routes";
import { toast } from "./ToastContainer";

const ESTODOS_OPCION = [
  "PENDIENTE",
  "EN_PROCESO",
  "LISTO",
  "ENTREGADO",
  "CANCELADO",
];

const getStatusClass = (estado) => {
  switch (estado.toLowerCase()) {
    case "pendiente":
      return "bg-amber-100 text-amber-900"; // status-pendiente
    case "en proceso":
      return "bg-blue-100 text-blue-900"; // status-en-proceso
    case "completado":
      return "bg-green-100 text-green-900"; // status-completado
    case "cancelado":
      return "bg-red-100 text-red-900"; // status-cancelado
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function PedidoDetalleModal({
  isOpen,
  onClose,
  pedido,
  unEstadoActualizado,
}) {
  if (!isOpen || !pedido) return null;

  const { accessToken } = useAuth();
  const [nuevoEstado, setNuevoEstado] = useState(pedido.estado);

  useEffect(() => {
    if (pedido) {
      setNuevoEstado(pedido.estado);
    }
  }, [pedido]);

  const transicionesValidas = {
    PENDIENTE: ["EN_PROCESO", "CANCELADO"],
    EN_PROCESO: ["LISTO_PARA_RETIRO", "EN_CAMINO", "CANCELADO"],
    LISTO_PARA_RETIRO: ["ENTREGADO", "CANCELADO"],
    EN_CAMINO: ["ENTREGADO", "CANCELADO"],
    ENTREGADO: [],
    CANCELADO: [],
  };

  const handleActualizarEstado = async () => {
    const estadoActual = pedido.estado.toUpperCase();
    const estadoNuevo = nuevoEstado.toUpperCase();

    if (nuevoEstado === pedido.estado) {
      toast(
        "warning",
        "Sin Cambios",
        `El pedido #${pedido.id} ya está en estado "${estadoNuevo}".`
      );
      onClose();
      return;
    }

    const posiblesTransiciones = transicionesValidas[estadoActual];

    if (posiblesTransiciones && !posiblesTransiciones.includes(estadoNuevo)) {
      const validos =
        posiblesTransiciones.length > 0
          ? posiblesTransiciones.join(", ")
          : "Ninguno";

      toast(
        "error",
        "Transición Inválida",
        `No se puede pasar de "${estadoActual}" a "${estadoNuevo}". Transiciones válidas: ${validos}.`
      );
      onClose();
      return;
    }

    const pedidoActualizadoRespuesta = await actualizarEstadoPedido(
      pedido.id,
      nuevoEstado,
      accessToken
    );

    if (!pedidoActualizadoRespuesta.success) {
      toast("error", "Error al Actualizar", pedidoActualizadoRespuesta.message);
      onClose();
      return;
    }

    if (unEstadoActualizado) {
      unEstadoActualizado(pedido.id, nuevoEstado);
    }

    toast(
      "success",
      "Actualización Exitosa",
      `Pedido #${pedido.id} actualizado a ${estadoNuevo}.`
    );

    onClose();
  };

  return (
    <div
      id="pedidoDetalleModal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-auto shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-semibold text-gray-900">
            Detalles del Pedido #{pedido.id}
          </h3>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <i className="ri-close-line text-2xl" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* 1. Información del Cliente y Creador */}
            <div>
              <h4 className="text-lg font-medium mb-4">
                Información del Cliente y Creador
              </h4>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium">{pedido.cliente}</p>
                <p className="text-gray-600 text-sm mt-1">
                  Pedido creado por: {pedido.usuario?.nombre || "N/A"}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">Fecha de Creación:</p>
                  <p className="text-sm font-medium">
                    {dayjs(pedido.creadoEn).format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Información del Pedido */}
            <div>
              <h4 className="text-lg font-medium mb-4">Estado y Entrega</h4>
              <div className="bg-gray-50 p-4 rounded">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Estado:</span>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                      pedido.estado
                    )}`}
                  >
                    {pedido.estado}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Fecha de Entrega:</span>
                  <span className="font-medium">
                    {pedido.fechaEntrega
                      ? dayjs(pedido.fechaEntrega).format("DD/MM/YYYY")
                      : "A definir"}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Archivos adjuntos:</span>
                  <span className="font-medium">
                    {pedido.archivo ? (
                      <a
                        href={`${pedido.archivo}`}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        Ver archivo
                      </a>
                    ) : (
                      "Ninguno"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detalles de Impresión */}
          <h4 className="text-lg font-medium mb-4">Detalles de Impresión</h4>
          <div className="bg-gray-50 p-4 rounded mb-6 text-sm grid grid-cols-2 gap-x-4 gap-y-2">
            <p>
              <span className="font-semibold">Tamaño:</span> {pedido.tamano}
            </p>
            <p>
              <span className="font-semibold">Tipo Papel:</span>{" "}
              {pedido.tipoPapel}
            </p>
            <p>
              <span className="font-semibold">Acabado:</span> {pedido.acabado}
            </p>
            <p>
              <span className="font-semibold">Calidad:</span> {pedido.calidad}
            </p>
            <p>
              <span className="font-semibold">Doble Faz:</span>{" "}
              {pedido.dobleFaz ? "Sí" : "No"}
            </p>
            <p>
              <span className="font-semibold">Cantidad:</span> {pedido.cantidad}{" "}
              copias
            </p>
            <p className="col-span-2">
              <span className="font-semibold">Comentarios:</span>{" "}
              {pedido.comentarios || "N/A"}
            </p>
          </div>

          {/* Totales y Acciones */}
          <div className="bg-gray-50 p-4 rounded mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">
                $ {pedido.subtotal?.toFixed(2) || "0.00"}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">IVA:</span>
              <span className="font-medium">
                $ {pedido.iva?.toFixed(2) || "0.00"}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Envío:</span>
              <span className="font-medium">
                $ {pedido.delivery ? "5.00" : "0.00"}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold text-lg">
                $ {pedido.total?.toFixed(2) || "0.00"}
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Notas:</span>
              <span className="font-normal">
                <input
                  type="text"
                  name="notasInternas"
                  id="notasInternas"
                  placeholder={pedido.notasInternas || "N/A"}
                />
              </span>
            </div>
          </div>

          <h4 className="text-lg font-medium mb-4 mt-4">Actualizar Estado</h4>
          <div className="bg-gray-100 p-4 rounded mb-6">
            <div className="flex flex-wrap gap-4 justify-start">
              {ESTODOS_OPCION.map((E) => (
                <label
                  key={E}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors border-2 
                                ${
                                  nuevoEstado === E
                                    ? "border-blue-500 bg-blue-50 text-blue-800 font-semibold"
                                    : "border-gray-200 bg-white hover:bg-gray-50"
                                }`}
                >
                  <input
                    type="radio"
                    name="nuevoEstado"
                    value={E}
                    checked={nuevoEstado === E}
                    onChange={() => setNuevoEstado(E)}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  {E}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 mr-3"
            >
              Cerrar
            </button>
            <button
              onClick={handleActualizarEstado}
              title="Actualiza el estado del pedido en la base de datos"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              Actualizar estado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
