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
        },
    },
})

export {
    prisma
}