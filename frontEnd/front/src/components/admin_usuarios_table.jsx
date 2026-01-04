"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { TarjetasEstadisticas_Usuarios } from "./TarjetasEstadisticas-Usuarios";
import { UsuariosFiltro } from "./Usuarios-filtro";
import { UsuariosGrid_Table } from "./usuarios-grid-table";
import { toast } from "./ToastContainer";
import { EliminarUsuarioModal } from "./eliminar_usuario";
import { delUsuario } from "@/app/routes/usuarios.routes";

export default function AdminUsuariosTable({ data }) {
  const [usuariosVisibles, setUsuariosVisibles] = useState(data);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
  const [filtroActual, setFiltroActual] = useState("Todos");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const totalUsuarios = usuariosVisibles.length;

  const router = useRouter();
  const { accessToken } = useAuth();

  const handlerEliminarUsuario = async () => {
    if (!usuarioAEliminar) return;

    if (!accessToken) {
      toast(
        "error",
        "Error",
        "No se pudo eliminar el usuario. Acceso denegado."
      );

      router.push("/");

      setUsuarioAEliminar(null);
      return;
    }

    try {
      const eliminar = await delUsuario(usuarioAEliminar.id, accessToken);
      console.log(eliminar);

      toast(
        "success",
        "Usuario Eliminado",
        "El usuario ha sido eliminado correctamente."
      );

      const nuevosUsuarios = usuariosVisibles.filter(
        (u) => u.id !== usuarioAEliminar.id
      );

      setUsuariosVisibles(nuevosUsuarios);
    } catch (error) {
      toast("error", "Error", "No se pudo eliminar el usuario.");
    } finally {
      setUsuarioAEliminar(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mb-2">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Gestión de Usuarios
        </h2>
        <p className="text-gray-600">
          Organiza y visualiza todos los usuarios registrados en el sistema de
          Papelería Sofia
        </p>
      </div>
      <TarjetasEstadisticas_Usuarios totales={totalUsuarios} />
      <UsuariosFiltro
        filtroActual={filtroActual}
        setFiltroActual={setFiltroActual}
        terminoBusqueda={terminoBusqueda}
        setTerminoBusqueda={setTerminoBusqueda}
      />
      <UsuariosGrid_Table
        usuariosVisibles={usuariosVisibles}
        filtroActual={filtroActual}
        terminoBusqueda={terminoBusqueda}
        onEliminar={setUsuarioAEliminar}
      />

      {usuarioAEliminar && (
        <EliminarUsuarioModal
          usuario={usuarioAEliminar}
          onConfirmar={handlerEliminarUsuario}
          onCancelar={() => {
            setUsuarioAEliminar(null);
          }}
        />
      )}
    </div>
  );
}
