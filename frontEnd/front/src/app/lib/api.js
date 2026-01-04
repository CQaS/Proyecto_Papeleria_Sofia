import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// INTERCEPTOR DE RESPUESTA: Procesa la data antes de que llegue a tus funciones
api.interceptors.response.use(
    (respuesta) => {
        return respuesta.data;
    },
    (error) => {
        let respuestaError = {
            success: false,
            message: "Error inesperado en la comunicación",
        };

        if (error.response) {
            respuestaError = error.response.data;
        } else if (error.request) {
            respuestaError.message = "No se pudo establecer conexión con el servidor";
        }

        return Promise.resolve(respuestaError);
    }
);