import React, { useState } from "react";
import PedidoDetalleModal from "./pedido-detalle-modal";
import dayjs from "dayjs";

function getStatusClass(estado) {
  switch (estado) {
    case "PENDIENTE":
      return "bg-blue-100 text-blue-800";
    case "EN_PROCESO":
      return "bg-yellow-100 text-yellow-800";
    case "LISTO":
      return "bg-green-100 text-green-800";
    case "ENTREGADO":
      return "bg-green-100 text-green-600";
    case "CANCELADO":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function OrdersTable({ pedidos }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPedido, setSelectedPedido] = useState(null);

  const verDetalles = (pedido) => {
    setSelectedPedido(pedido);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPedido(null);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Pedido
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Pedido
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Entrega
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pedidos.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center">
                      <i className="ri-file-list-line text-gray-300 text-5xl mb-2" />
                      <p className="text-sm">
                        No se encontraron pedidos con los criterios
                        seleccionados
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                pedidos.map((pedido) => (
                  <tr
                    key={pedido.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pedido.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {pedido.cliente}
                      </div>
                      <div className="text-sm text-gray-500">
                        {pedido.usuario.nombre}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dayjs(pedido.creadoEn).format("DD/MM/YYYY")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                          pedido.estado
                        )}`}
                      >
                        {pedido.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dayjs(pedido.fechaEntrega).format("DD/MM/YYYY")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      $ {pedido.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          title="Ver detalles"
                          onClick={() => verDetalles(pedido)}
                          className="text-[#3b82f6] hover:text-blue-600 transition-colors"
                        >
                          <i className="ri-eye-line" />
                        </button>
                        <button className="text-red-600 hover:text-red-800 transition-colors">
                          <i className="ri-delete-bin-line" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="bg-white px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Mostrando <span className="font-medium">{pedidos.length} </span>
              pedidos
            </div>
          </div>
        </div>
      </div>

      <PedidoDetalleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        pedido={selectedPedido} // Pasa los datos
      />
    </>
  );
}
