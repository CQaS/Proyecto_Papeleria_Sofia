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