"use client";

import { useState } from "react";
import { usePedido } from "@/context/PedidoContext";
import { Clock } from "lucide-react";
import { handleRealizarPedido } from "../app/lib/PedidosValidacionAccion";

export default function ResumenPedido() {
  const { pedido, calcularTotal, actualizar } = usePedido();
  const { subtotal, iva, total } = calcularTotal();
  const [enviando, setEnviando] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Resumen del Pedido
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Impresión {pedido.tamano} × {pedido.cantidad} copia
            {pedido.cantidad > 1 ? "s" : ""}
          </span>
          <span className="text-gray-900">
            €{(0.15 * pedido.cantidad).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Papel {pedido.tipoPapel}</span>
          <span className="text-gray-900">
            €{(0.05 * pedido.cantidad).toFixed(2)}
          </span>
        </div>
        {pedido.dobleFaz && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Doble cara</span>
            <span className="text-gray-900">
              +€{(0.05 * pedido.cantidad).toFixed(2)}
            </span>
          </div>
        )}
        {pedido.encuadernado && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Encuadernado</span>
            <span className="text-gray-900">+€2.00</span>
          </div>
        )}
        {pedido.perforado && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Perforado</span>
            <span className="text-gray-900">+€0.50</span>
          </div>
        )}
        {pedido.grapado && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Grapado</span>
            <span className="text-gray-900">+€0.30</span>
          </div>
        )}
        {pedido.delivery && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Entrega urgente</span>
            <span className="text-gray-900">+€5.00</span>
          </div>
        )}
        <hr className="my-3" />
        <div className="flex justify-between font-medium">
          <span className="text-gray-900">Subtotal</span>
          <span className="text-gray-900">€{subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">IVA (21%)</span>
          <span className="text-gray-900">€{iva}</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-900">Total</span>
          <span className="text-blue-500">€{total}</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-sm text-green-700">
            Tiempo estimado de entrega: 2-3 días laborables
          </span>
        </div>
      </div>

      <button
        onClick={() =>
          handleRealizarPedido({
            pedido,
            calcularTotal,
            setEnviando,
            actualizar,
          })
        }
        disabled={enviando}
        className="w-full mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors"
      >
        {enviando ? "Enviando..." : `Realizar Pedido - €${total}`}
      </button>
    </div>
  );
}
