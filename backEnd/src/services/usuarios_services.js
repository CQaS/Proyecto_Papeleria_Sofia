import {
    prisma
} from "../libs/prisma.js";

/** * Servicio para listar todos los usuarios.
 * @returns {Promise<Array>} Lista de usuarios.
 */

const listarUsuarios = async () => {
    return await prisma.usuario.findMany({
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

/** * Servicio para obtener un usuario por su ID.
 * @param {number} id - ID del usuario a buscar.
 * @returns {Promise<Object>} Usuario encontrado o null si no existe.
 */

const UsuarioPorId = async (id) => {
    return await prisma.usuario.findUnique({
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

/** * Servicio para buscar un usuario por email o telefono.
 * @param {string} email - Email del usuario a buscar.
 * @param {string} telefono - Telefono del usuario a buscar.
 * @returns {Promise<Object>} Usuario encontrado o null si no existe.
 */

const UsuarioPorEmailTelefono = async (email, telefono) => {
    return await prisma.usuario.findFirst({
        where: {
            OR: [{
                    email
                },
                {
                    telefono
                }
            ]
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

/** * Servicio para crear un nuevo usuario.
 * @param {Object} data - Datos del usuario a crear.
 * @returns {Promise<Object>} Usuario creado.
 */

const UsuarioCrear = async (data) => {
    return await prisma.usuario.create({
        data
    })
}

/** * Servicio para actualizar un usuario.
 * @param {number} id - ID del usuario a actualizar.
 * @param {Object} data - Nuevos datos del usuario.
 * @returns {Promise<Object>} Usuario actualizado.
 */

const UsuarioActualizar = async (id, data) => {
    return await prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data
    })
}

/** * Servicio para eliminar un usuario (cambiar su estado a inactivo).
 * @param {number} id - ID del usuario a eliminar.
 * @returns {Promise<Object>} Usuario eliminado.
 */

const UsuarioEliminar = async (id) => {
    return await prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data: {
            estado: 'INACTIVO'
        },
    });
}

const USUARIOS_SERVICES = {
    listarUsuarios,
    UsuarioPorId,
    UsuarioPorEmailTelefono,
    UsuarioCrear,
    UsuarioActualizar,
    UsuarioEliminar
}

export default USUARIOS_SERVICES