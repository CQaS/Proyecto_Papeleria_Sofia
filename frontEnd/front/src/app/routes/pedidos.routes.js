// lib/pedidos.js  (o donde prefieras)
import { api } from "../lib/api";
import Swal from 'sweetalert2';

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
  try {
    const response = await api.get('/pedido/admin/pedido_length');
    console.log(response);
    return response.data.len;
  } catch (error) {
    console.error(error);
    return 0;
  }  
}

export const postPedidos = async (pedidoData) => {
  const url = '/pedido/pedido_crear';

  try {
    const response = await api.post(url, pedidoData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000, // 60 segundos por si el archivo es grande
    });

    return response.data ;

  } catch (error) {
    // Error
    const mensaje = error.response?.data?.message || 'Error al enviar el pedido. Intenta de nuevo.';

    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#ef4444'
    });

    return { success: false, error: mensaje };
  }
};

export const actualizarEstadoPedido = async (id, nuevoEstado, token) => {

  if (!token) {
    console.log("Error: Token de administrador no disponible.");
    return {
      success: false,
      message: "Token no disponible."
    };
  }

  try {
    const response = await api.put(`/pedido/admin/pedido_actualizar_estado/${id}`, {
      estado: nuevoEstado
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};