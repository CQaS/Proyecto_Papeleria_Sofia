import {
    PrismaClient
} from "@prisma/client"
import * as Schemas from "../schemas/index.schema.js"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient().$extends({
    query: {
        usuario: {
            async create({
                args,
                query
            }) {
                args.data = Schemas.UsuarioSchema.parse(args.data)

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
                args.data = Schemas.UsuarioSchema.partial().parse(args.data)

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
        consulta: {
            async create({
                args,
                query
            }) {
                args.data = Schemas.ConsultaSchema.parse(args.data)
                return query(args)
            },
            async update({
                args,
                query
            }) {
                // Para update podés usar partial si es un update flexible
                args.data = Schemas.ConsultaSchema.partial().parse(args.data)
                return query(args)
            },
        },
        pedido: {
            async create({
                args,
                query
            }) {
                args.data = Schemas.PedidoSchema.parse(args.data)
                return query(args)
            },
            async update({
                args,
                query
            }) {
                args.data = Schemas.PedidoEstadoActualizarSchema.partial().parse(args.data)

                const pedidoActual = await prisma.pedido.findUnique({
                    where: {
                        id: args.where.id
                    },
                    select: {
                        estado: true
                    }
                })

                const pedidoActualizado = await query(args)

                if (
                    args.data.estado &&
                    args.data.estado !== pedidoActual.estado
                ) {
                    // Registrar en historial
                    await prisma.historialEstadoPedido.create({
                        data: {
                            pedidoId: args.where.id,
                            estadoAnterior: pedidoActual.estado,
                            estadoNuevo: args.data.estado,
                            cambiadoPor: "SISTEMA", // o el ID de admin, si lo tenés
                        }
                    })
                }

                return pedidoActualizado
            },
        },
        producto: {
            async create({
                args,
                query
            }) {
                args.data = Schemas.ProductoSchema.parse(args.data)
                return query(args)
            },
            async update({
                args,
                query
            }) {
                args.data = Schemas.ProductoSchema.partial().parse(args.data)
                return query(args)
            }
        },
        promocion: {
            async create({

                args,
                query
            }) {
                args.data = Schemas.PromocionSchema.parse(args.data)
                return query(args)
            },
            async update({
                args,
                query
            }) {
                args.data = Schemas.PromocionSchema.partial().parse(args.data)
                return query(args)
            }
        }
    }
})

export {
    prisma
}