// components/utility/ClientDataFetcher.jsx
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { MAPA_DE_SERVICIOS } from "../lib/servicios_registros";
import Loading from "../loading";

/**
 * @description Wrapper de Cliente genérico para manejar la autenticación, el loading y el fetch.
 * @param {component} TablaComponente - El componente que debe renderizarse con los datos.
 */
export default function GestorDeConsultasAutenticadas({
  TablaComponente,
  servicio,
}) {
  const { accessToken, loading: authLoading } = useAuth();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (authLoading) {
        return <Loading />;
      }

      const funcionServicio = MAPA_DE_SERVICIOS[servicio];

      if (!funcionServicio) {
        setError("Servicio no disponible");
        return;
      }

      if (!authLoading && accessToken) {
        try {
          setError(null);

          const response = await funcionServicio(accessToken);

          setData(response.data);
        } catch (err) {
          console.error("Error en ClientDataFetcher:", err);
          setError("Error al cargar los datos: " + err.message);
          setData(null);
        }
      } else if (!authLoading && !accessToken) {
        setError("Acceso denegado: Token no disponible.");
      }
    }
    fetchData();
  }, [accessToken, authLoading]);

  if (authLoading) {
    return <div className="p-4 text-center">Cargando datos...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600 text-center">Error: {error}</div>;
  }

  if (!accessToken && !authLoading) {
    return <div className="p-4 text-center">Por favor, inicie sesión.</div>;
  }

  if (!data) {
    return <Loading />;
  }

  return <TablaComponente data={data} />;
}
