"use client";

import { createContext, useContext, useState } from "react";

const PedidoContext = createContext();

export function PedidoProvider({ children }) {
  const [pedido, setPedido] = useState({
    tamano: "Sin seleccionar",
    tipoPapel: "Sin seleccionar",
    acabado: "Sin seleccionar",
    calidad: "Económica",
    cantidad: 1,
    orientacion: "vertical",
    dobleFaz: false,
    encuadernado: false,
    perforado: false,
    grapado: false,
    delivery: false,
    archivo: null,
  });

  const actualizar = (campo, valor) => {
    setPedido((prev) => ({ ...prev, [campo]: valor }));
  };

  const calcularTotal = () => {
    let base = 0.15 * pedido.cantidad;
    let extras = 0;
    if (pedido.dobleFaz) extras += 0.05 * pedido.cantidad;
    if (pedido.encuadernado) extras += 2.0;
    if (pedido.perforado) extras += 0.5;
    if (pedido.grapado) extras += 0.3;
    if (pedido.delivery) extras += 5.0;

    const subtotal = (base + extras).toFixed(2);
    const iva = (base + extras) * 0.21;
    const total = (base + extras + iva).toFixed(2);

    return { subtotal, iva: iva.toFixed(2), total };
  };

  return (
    <PedidoContext.Provider value={{ pedido, actualizar, calcularTotal }}>
      {children}
    </PedidoContext.Provider>
  );
}

export const usePedido = () => useContext(PedidoContext);
