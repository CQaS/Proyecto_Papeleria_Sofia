import routesUsuarios from './usuario.routes.js'
import routesConsulta from './consulta.routes.js'

export default [{
    path: '/usuario',
    router: routesUsuarios
}, {
    path: '/consulta',
    router: routesConsulta
}]