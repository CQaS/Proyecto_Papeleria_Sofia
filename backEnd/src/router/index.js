import routesUsuarios from './usuario.routes.js'
import routesConsulta from './consulta.routes.js'
import routesPedido from './pedido.routes.js'
import routesProducto from './producto.routes.js'
import routesPromocion from './promocion.routes.js'
import routesAuth from './auth.routes.js'

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
}, {
    path: '/promocion',
    router: routesPromocion
}, {
    path: '/auth',
    router: routesAuth
}]