import {
    z
} from "zod";

const CategoriaProductoEnum = z.enum([
    "CUADERNOS",
    "LAPICES",
    "FIBRONES",
    "MOCHILAS",
    "HOJAS",
    "IMPRESIONES",
    "PLASTILINAS",
    "REGLAS",
    "OTROS"
])

const EstadoProductoEnum = z.enum([
    "ACTIVO",
    "INACTIVO",
    "ARCHIVADO"
])


export const ProductoSchema = z.object({
    nombre: z.string().min(3).max(100),
    slug: z
        .string()
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "El slug debe tener solo minúsculas, números y guiones",
        }).optional(),
    descripcion: z.string().max(1000).optional(),
    categoria: CategoriaProductoEnum.optional(),
    precio: z.number().positive("El precio debe ser mayor a 0"),
    stock: z.number().int().min(0),
    imagenUrl: z.string().url("Debe ser una URL válida").optional(),
    estado: EstadoProductoEnum.optional(),
})