"use client";

import { UsuariosCard } from "./usuarios-cards";
import { UserSearch } from "lucide-react";

function filtrarUsuarios(usuarios, filtroActual, terminoBusqueda) {
  return usuarios.filter((usuario) => {
    console.log(usuario);
    const coincideBusqueda =
      !terminoBusqueda ||
      usuario.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      usuario.email.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      usuario.telefono.includes(terminoBusqueda) ||
      usuario.id.toLowerCase().includes(terminoBusqueda.toLowerCase());

    return coincideBusqueda;
  });
}

export function UsuariosGrid_Table({
  usuariosVisibles,
  filtroActual,
  terminoBusqueda,
  onEliminar,
}) {
  if (usuariosVisibles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <UserSearch className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No se encontraron usuarios
        </h3>
        <p className="text-gray-600">
          Intenta con diferentes términos de búsqueda
        </p>
      </div>
    );
  }

  const usuariosFiltrados = filtrarUsuarios(
    usuariosVisibles,
    filtroActual,
    terminoBusqueda
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {usuariosFiltrados.map((user) => (
          <UsuariosCard key={user.id} user={user} onEliminar={onEliminar} />
        ))}
      </div>
    </>
  );
}
