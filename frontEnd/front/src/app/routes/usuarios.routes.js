import {
    api
} from "../lib/api";

export const getUsuarios = async (token) => {
    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.get(`/usuario/admin/usuarios_lista`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

export const getUsuariosLength = async () => {
    const response = await api.get('/usuario/admin/usuarios_length');
    console.log(response);
    return response.len;
}

export const delUsuario = async (id, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.delete(`/usuario/admin/usuario_eliminar/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}