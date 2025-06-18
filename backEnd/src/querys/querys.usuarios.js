import {
    prisma
} from "../libs/prisma.js";

const listarUsuarios = () => {
    return prisma.usuario.findMany()
}


const QUERY_USUARIOS = {
    listarUsuarios
}

export default QUERY_USUARIOS