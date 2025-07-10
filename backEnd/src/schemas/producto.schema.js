import {
    z
} from "zod";

export const ProductoSchema = z.object({
    nombre: z.string().min(3).max(100),
    slug: z
        .string()
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "El slug debe tener solo minúsculas, números y guiones",
        }),
    descripcion: z.string().max(1000).optional(),
    categoria: z.string().max(100).optional(),
    precio: z.number().positive("El precio debe ser mayor a 0"),
    stock: z.number().int().min(0),
    imagenUrl: z.string().url("Debe ser una URL válida").optional(),
    estado: z.enum(["ACTIVO", "INACTIVO", "ARCHIVADO"]).optional(),
})