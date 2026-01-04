import {
    api
} from "../lib/api";

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

// login.routes.js
export const login = async (email, password) => {
    const respuesta = await api.post('/auth/login', {
        email,
        password
    });

    return respuesta;
};

export const logout = async () => {
        const response = await api.post('/auth/logout');
        return response;
};