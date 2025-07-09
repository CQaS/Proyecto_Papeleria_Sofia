import routesUsuarios from './usuario.routes.js'
import routesConsulta from './consulta.routes.js'
import routesPedido from './pedido.routes.js'

export default [{
    path: '/usuario',
    router: routesUsuarios
}, {
    path: '/consulta',
    router: routesConsulta
}, {
    path: '/pedido',
    router: routesPedido
}]