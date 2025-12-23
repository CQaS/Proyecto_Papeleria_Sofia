import { api } from "../lib/api";

export const getUsuarios = async (token) => {
    if (!token) {
        console.log("Error: Token de administrador no disponible.");
        return {
            success: false,
            message: "Token no disponible."
        };
    }

    try {
        const response = await api.delete(`/usuario/admin/usuarios_lista`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });  

        return response.data;
    } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al consultar los usuarios. Intenta de nuevo.';
        console.error(error);
        return {
            success: false,
            message: mensaje
        };
    }
}

export const getUsuariosLength = async () => {
        try {
            const response = await api.get('/usuario/admin/usuarios_length');
            console.log(response);
            return response.data.len;
        } catch (error) {
            console.error(error);
            return 0;
        }
    }