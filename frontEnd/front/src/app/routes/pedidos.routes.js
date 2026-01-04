// lib/pedidos.js  (o donde prefieras)
import {
  api
} from "../lib/api";

export const getPedidos = async () => {
  try {
    const response = await api.get('/pedido/admin/pedido_lista');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getPedidosLength = async () => {
  const response = await api.get('/pedido/admin/pedido_length');
  return response.success ? response.len : 0;
}

export const postPedidos = async (pedidoData) => {
  const respuesta = await api.post('/pedido/pedido_crear', pedidoData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 60000, // Mantenemos el timeout para archivos grandes
  });

  return respuesta;
};

export const actualizarEstadoPedido = async (id, nuevoEstado, token) => {

  if (!token) {
    console.log("Error: Token de administrador no disponible.");
    return {
      success: false,
      message: "Token no disponible."
    };
  }

  const response = await api.put(`/pedido/admin/pedido_actualizar_estado/${id}`, {
    estado: nuevoEstado
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response;
};

export const agregarNotasInternas = async (id, notas, token) => {

  if (!token) {
    console.log("Error: Token de administrador no disponible.");
    return {
      success: false,
      message: "Token no disponible."
    };
  }

  const response = await api.put(`/pedido/admin/pedido_notasInternas/${id}`, {
    notasInternas: notas
  }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
}