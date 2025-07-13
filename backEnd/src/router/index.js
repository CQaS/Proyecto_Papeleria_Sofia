import routesUsuarios from './usuario.routes.js'
import routesConsulta from './consulta.routes.js'
import routesPedido from './pedido.routes.js'
import routesProducto from './producto.routes.js'

/** * Rutas principales del sistema.
 * @module router/index
 * @description Define las rutas principales del sistema y las asocia con sus respectivos routers.
 */

export default [{
    path: '/usuario',
    router: routesUsuarios
}, {
    path: '/consulta',
    router: routesConsulta
}, {
    path: '/pedido',
    router: routesPedido
}, {
    path: '/producto',
    router: routesProducto
}]