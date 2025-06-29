import {
    prisma
} from "../libs/prisma.js";

const listarUsuarios = () => {
    return prisma.usuario.findMany({
        select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true,
            rol: true,
            telefono: true,
            direccion: true,
            creadoEn: true,
        },
        orderBy: {
            creadoEn: "desc",
        },
    })
}

const UsuarioCrear = (data) => {
    return prisma.usuario.create({
        data
    })
}


const QUERY_USUARIOS = {
    listarUsuarios,
    UsuarioCrear
}

export default QUERY_USUARIOS