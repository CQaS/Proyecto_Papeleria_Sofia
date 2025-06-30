import {
    PrismaClient
} from "@prisma/client"
import {
    Usuario
} from "../schemas/usuario.schema.js"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient().$extends({
    query: {
        usuario: {
            async create({
                args,
                query
            }) {
                args.data = Usuario.parse(args.data)

                if (args.data.password) {
                    const salt = await bcrypt.genSalt(10)
                    args.data.password = await bcrypt.hash(args.data.password, salt)
                }

                return query(args)
            },

            async update({
                args,
                query
            }) {
                args.data = Usuario.partial().parse(args.data)

                if (args.data.password) {
                    const salt = await bcrypt.genSalt(10)
                    args.data.password = await bcrypt.hash(args.data.password, salt)
                }

                return query(args)
            },

            async findUnique({
                args,
                query
            }) {
                // Podes validar o loguear si querés acá
                return query(args)
            },

            async updateMany({
                args,
                query
            }) {
                // Se podría usar para borrado lógico en lote
                return query(args)
            },
        },
    },
})

export {
    prisma
}