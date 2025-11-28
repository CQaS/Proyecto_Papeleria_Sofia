import {
    api
} from "../lib/api";

export const getProducts = async (filters = {}) => {
    let url = '/producto/producto_lista';
    if (filters.categoria) {
        url = `/producto/categorias/${filters.categoria}`;
    }
    const response = await api.get(url);
    return response.data;
};

export const getCategorias = async () => {
    const response = await api.get('/producto/categoriasLista');
    return response.data;
}

export const getProductById = async (id) => {
    const response = await api.get(`/producto/producto_id/${id}`);
    return response.data;
};

export const getRelacionados = async (relacionadosCategoria) => {
    const response = await api.get(`/producto/categorias/${relacionadosCategoria}`);
    return response.data;
};

export const createProduct = async (formData) => {
    const response = await api.post('/productos', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
    return response.data;
};