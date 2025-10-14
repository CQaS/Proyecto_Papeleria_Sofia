import {
    z
} from "zod"

export const paramsSchema = z.object({
    id: z.preprocess((val) => {
        if (typeof val === 'string' && /^\d+$/.test(val)) return Number(val)
        return val
    }, z.union([z.number().int().positive(), z.string().min(1)]))
})