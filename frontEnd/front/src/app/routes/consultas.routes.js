import {
    api
} from "../lib/api";

export const postConsulta = async (formData) => {
    const response = await api.post('/consulta/consulta_crear', formData);
    return response;
};

export const getConsultas = async (token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.get('/consulta/admin/consulta_lista', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
};

export const putResuelta = async (id, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.put(`/consulta/admin/consulta_resuelta/${id}`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

export const putRespuesta = async (id, respuesta, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.put(`/consulta/admin/consulta_respuesta/${id}`, {
        respuesta: respuesta
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

export const delConsulta = async (id, token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.delete(`/consulta/admin/consulta_eliminar/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

export const delConsultasTodas = async (token) => {

    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    const response = await api.delete(`/consulta/admin/consulta_eliminar_todas`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}