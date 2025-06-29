import QUERY_USUARIOS from "../querys/querys.usuarios.js"
const {
    listarUsuarios,
    UsuarioCrear
} = QUERY_USUARIOS

export const usuarios_lista = async (req, res) => {
    try {
        const _listar_U = await listarUsuarios()
        console.log(_listar_U)
        res.json(_listar_U)

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            Error: 'Algo fallo'
        })

    }
}

export const usuarios_crear = async (req, res) => {
    try {
        const usuario = await UsuarioCrear(req.body);

        res.status(201).json({
            mensaje: "Usuario creado exitosamente",
            usuario,
        });
    } catch (error) {
        console.error(error);

        if (error.name === "ZodError") {
            return res.status(400).json({
                error: error.errors
            });
        }

        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return res.status(409).json({
                error: "El email ya está registrado"
            });
        }

        res.status(500).json({
            error: "Error inesperado"
        });
    }
};