"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function OrdersFilters({
  searchTerm,
  setSearchTerm,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  selectedStatuses,
  setSelectedStatuses,
}) {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const dateDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  const statuses = [
    "PENDIENTE",
    "EN_PROCESO",
    "LISTO",
    "ENTREGADO",
    "CANCELADO",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dateDropdownRef.current &&
        !dateDropdownRef.current.contains(event.target)
      ) {
        setShowDateDropdown(false);
      }
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setShowStatusDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStatusChange = (status) => {
    if (status === "todos") {
      setSelectedStatuses(["todos"]);
    } else {
      const newStatuses = selectedStatuses.includes(status)
        ? selectedStatuses.filter((s) => s !== status)
        : [...selectedStatuses.filter((s) => s !== "todos"), status];
      setSelectedStatuses(newStatuses.length === 0 ? ["todos"] : newStatuses);
    }
  };

  const clearDateFilter = () => {
    setDateFrom("");
    setDateTo("");
  };

  const getDateFilterText = () => {
    if (dateFrom || dateTo) {
      if (dateFrom && dateTo) return `${dateFrom} - ${dateTo}`;
      if (dateFrom) return `desde ${dateFrom}`;
      return `hasta ${dateTo}`;
    }
    return "Fecha";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-64">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="ri-search-line text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre del cliente o ID del pedido..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="relative" ref={dateDropdownRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            onClick={() => setShowDateDropdown(!showDateDropdown)}
          >
            <i className="ri-calendar-line" />
            <span>{getDateFilterText()}</span>
            <i className="ri-arrow-down-s-line" />
          </button>
          {showDateDropdown && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha desde
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha hasta
                    </label>
                    <input
                      type="date"
                      min={dateFrom}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={clearDateFilter}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                    >
                      Limpiar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={statusDropdownRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <span>Estado</span>
            <i className="ri-arrow-down-s-line" />
          </button>
          {showStatusDropdown && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="p-2 space-y-1">
                <label className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <div
                    className={`w-4 h-4 border rounded flex items-center justify-center ${
                      selectedStatuses.includes("todos")
                        ? "bg-[#3b82f6] border-[#3b82f6]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedStatuses.includes("todos") && (
                      <i className="ri-check-line text-white text-xs" />
                    )}
                  </div>
                  <span className="text-sm">Todos</span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedStatuses.includes("todos")}
                    onChange={() => handleStatusChange("todos")}
                  />
                </label>
                {statuses.map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 border rounded flex items-center justify-center ${
                        selectedStatuses.includes(status)
                          ? "bg-[#3b82f6] border-[#3b82f6]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedStatuses.includes(status) && (
                        <i className="ri-check-line text-white text-xs" />
                      )}
                    </div>
                    <span className="text-sm">{status}</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedStatuses.includes(status)}
                      onChange={() => handleStatusChange(status)}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link
          href="/pedidos"
          className="bg-[#3b82f6] text-white px-6 py-2 rounded-lg whitespace-nowrap hover:bg-blue-600 transition-colors"
        >
          <div className="flex items-center gap-2">
            <i className="ri-add-line" />
            <span>Nuevo Pedido</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
