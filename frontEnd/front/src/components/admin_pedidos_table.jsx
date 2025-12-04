"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { PedidosTable } from "@/components/pedidos-table";
import { OrdersFilters } from "@/components/pedidos-filtro";

export default function AdminPedidosTable({ pedidosData }) {
  const [filteredOrders, setFilteredOrders] = useState(pedidosData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState(["todos"]);

  useEffect(() => {
    filterOrders();
  }, [searchTerm, dateFrom, dateTo, selectedStatuses]);

  const parseDate = (dateString) => {
    const parts = dateString.split("/");
    return new Date(
      Number.parseInt(parts[2]),
      Number.parseInt(parts[1]) - 1,
      Number.parseInt(parts[0])
    );
  };

  const filterOrders = () => {
    let filtered = pedidosData;

    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.usuario.nombre
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFrom || dateTo) {
      filtered = filtered.filter((order) => {
        if (!order.creadoEn || order.creadoEn === "-") return false;

        const orderDate = new Date(order.creadoEn);
        let matchesDateRange = true;

        if (dateFrom) {
          const fromDate = new Date(dateFrom);
          matchesDateRange = matchesDateRange && orderDate >= fromDate;
        }

        if (dateTo) {
          const nextDay = new Date(dateTo);
          nextDay.setDate(nextDay.getDate() + 1);

          matchesDateRange = matchesDateRange && orderDate < nextDay;
        }

        return matchesDateRange;
      });
    } else {
      console.log("No hay fechas");
    }

    const showAll = selectedStatuses.includes("todos");
    if (!showAll && selectedStatuses.length > 0) {
      filtered = filtered.filter((order) =>
        selectedStatuses.includes(order.estado)
      );
    }

    setFilteredOrders(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Gestión de Pedidos
            </h1>
            <p className="text-gray-600">
              Administra todos los pedidos de impresión y encuadernación
            </p>
          </div>

          <OrdersFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            dateFrom={dateFrom}
            setDateFrom={setDateFrom}
            dateTo={dateTo}
            setDateTo={setDateTo}
            selectedStatuses={selectedStatuses}
            setSelectedStatuses={setSelectedStatuses}
          />

          <PedidosTable pedidosIniciales={filteredOrders} />
        </main>
      </div>
    </div>
  );
}
