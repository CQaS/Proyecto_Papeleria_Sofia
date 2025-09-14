import {
    api
} from "../lib/api";

export const getPromociones = async () => {
    const response = await api.get('/promocion/lista_promociones');
    return response.data;
};