 import CONSULTAS_SERVICES from "../services/consultas.services.js";

 export const consulta_lista = async (req, res) => {
     try {
         const _listar_C = await CONSULTAS_SERVICES.listarConsultas()
         console.log(_listar_C)
         res.status(200).json({
             success: true,
             message: "Consultas listadas exitosamente",
             data: _listar_C
         })

     } catch (error) {
         console.error(error)
         res.status(500).json({
             success: false,
             message: "Ocurrió un error inesperado en el servidor.",
             error: error.message || "Error interno del servidor"
         })

     }
 }

export const consulta_crear = async (req, res) => {
        try {
            const _crear_C = await CONSULTAS_SERVICES.crearConsulta(req.body)
            console.log(_crear_C)
            res.status(201).json({
                success: true,
                message: "Consulta creada exitosamente",
                data: _crear_C
            })
    
        } catch (error) {
            console.error(error)
            res.status(500).json({
                success: false,
                message: "Ocurrió un error inesperado en el servidor.",
                error: error.message || "Error interno del servidor"
            })
        }
    }