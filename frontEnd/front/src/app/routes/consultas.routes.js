import {
    api
} from "../lib/api";

export const postConsulta = async (formData) => {
    try {
        const response = await api.post('/consulta/consulta_crear', formData);
        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al enviar la consulta. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
};

export const getConsultas = async (token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    try {
        const response = await api.get('/consulta/admin/consulta_lista', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al obtener las consultas. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
};

export const delConsulta = async (id, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    try {
        const response = await api.delete(`/consulta/admin/consulta_eliminar/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al eliminar la consulta. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
}

export const putResuelta = async (id, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    try {
        const response = await api.put(`/consulta/admin/consulta_resuelta/${id}`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al marcar la consulta como resuelta. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
}

export const putRespuesta = async (id, respuesta, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    try {
        const response = await api.put(`/consulta/admin/consulta_respuesta/${id}`, {
                    respuesta: respuesta
                },
                    {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al marcar la consulta como resuelta. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
}