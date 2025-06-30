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

const UsuarioPorId = (id)=> {
    return prisma.usuario.findUnique({
        where: {
            id: Number(id)
        },
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
    })
}

const UsuarioCrear = (data) => {
    return prisma.usuario.create({
        data
    })
}

const UsuarioActualizar = (id, data) => {
    return prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data
    })
}

const UsuarioEliminar = (id) => {
    return prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data: {
            estado: 'INACTIVO' 
        },
    });
}

const QUERY_USUARIOS = {
    listarUsuarios,
    UsuarioPorId,
    UsuarioCrear,
    UsuarioActualizar,
    UsuarioEliminar
}

export default QUERY_USUARIOS