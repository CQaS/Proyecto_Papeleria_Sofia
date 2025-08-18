export const validarParams = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.params)
    if (!result.success) {
        return res.status(400).json({
            success: false,
            errors: result.error.errors
        })
    }
    req.params = result.data
    next()
}