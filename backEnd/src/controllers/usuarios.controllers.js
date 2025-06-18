import QUERY_USUARIOS from "../querys/querys.usuarios.js"
const {
    listarUsuarios,
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