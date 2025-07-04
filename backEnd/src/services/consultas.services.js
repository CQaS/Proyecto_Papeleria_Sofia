import {
    prisma
} from "../libs/prisma.js"

const listarConsultas = () => {
    return prisma.consulta.findMany({
        select: {
            id: true,
            nombre: true,
            email: true,
            telefono: true,
            mensaje: true,
            respuesta: true,
            leido: true,
            resuelto: true,
            creadoEn: true,
        },
        orderBy: {
            creadoEn: "desc",
        },
    })
}

const crearConsulta = (data) => {
    return prisma.consulta.create({
        data
    })
}

const CONSULTAS_SERVICES = {
    listarConsultas,
    crearConsulta
}

export default CONSULTAS_SERVICES
