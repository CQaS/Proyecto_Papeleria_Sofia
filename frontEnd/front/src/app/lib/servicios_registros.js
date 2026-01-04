import {
    getPedidos
} from "../routes/pedidos.routes";
import {
    getConsultas
} from "../routes/consultas.routes";
import {
    getUsuarios
} from "../routes/usuarios.routes";

export const MAPA_DE_SERVICIOS = {
    "getPedidos": getPedidos,
    "getConsultas": getConsultas,
    "getUsuarios": getUsuarios
}