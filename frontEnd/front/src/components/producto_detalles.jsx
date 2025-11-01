import Image from "next/image";
import Link from "next/link";
import PromosActivasSeccion from "./promos-activas-section";
import ProductosRelacionadosSeccion from "./productos-relacionados-section";

export default function ProductoDetallado({ detallado }) {
  console.log("Detalle del producto recibido:", detallado);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/productos?categoria=CUADERNOS"
            className="hover:underline"
          >
            {detallado.categoria}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{detallado?.nombre}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <aside className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
              <h3 className="text-lg font-semibold font-['Pacifico'] text-primary mb-4">
                Promociones Activas
              </h3>

              <PromosActivasSeccion />
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div
                    className="zoom-container rounded-lg mb-4 relative"
                    style={{ height: "400px" }}
                  >
                    {detallado.imagenes
                      .filter((img) => img.esPrincipal === true)
                      .map((img, i) => (
                        <Image
                          key={i}
                          src={img.url || "/placeholder.svg"}
                          alt={detallado.nombre}
                          className="zoom-image object-top rounded-lg"
                          width={500}
                          height={400}
                          priority
                        />
                      ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {detallado.imagenes
                      .filter((img) => img.esPrincipal !== true)
                      .map((img, i) => (
                        <Image
                          key={i}
                          src={img.url || "/placeholder.svg"}
                          alt={detallado.nombre}
                          className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                          width={100}
                          height={100}
                        />
                      ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {detallado.nombre}
                  </h1>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-fill text-yellow-400"></i>
                      <i className="ri-star-half-line text-yellow-400"></i>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      (127 reseñas)
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-primary">
                        ${detallado.precio.toFixed(2)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        $15.99
                      </span>
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                        19% OFF
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Color:
                    </h3>
                    <div className="flex space-x-3">
                      <button className="w-8 h-8 bg-blue-500 rounded-full border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"></button>
                      <button className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"></button>
                      <button className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"></button>
                      <button className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"></button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Tipo de Rayado:
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="border-2 border-primary bg-primay px-4 py-2 rounded-button text-sm font-medium whitespace-nowrap">
                        Rayado
                      </button>
                      <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-button text-sm font-medium hover:border-gray-400 whitespace-nowrap">
                        Cuadriculado
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line"></i>
                        </div>
                        <span>En stock ({detallado?.stock} disponibles)</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-truck-line"></i>
                        </div>
                        <span>Envío gratis desde $30</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-[#4f46e5] text-white py-3 px-6 rounded-b-md font-medium hover:bg-blue-800 transition-colors whitespace-nowrap">
                      Agregar al Carrito
                    </button>
                    <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-button font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                      Comprar Ahora
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-button font-medium hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-heart-line"></i>
                      </div>
                      Agregar a Favoritos
                    </button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold font-['Pacifico'] text-primary mb-4">
                      Características del Producto
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {detallado.caracteristicas &&
                      detallado.caracteristicas.length > 0 ? (
                        detallado.caracteristicas.map(
                          (caracteristica, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-4 h-4 flex items-center justify-center mr-3">
                                <i className="ri-check-line text-green-500"></i>
                              </div>
                              {caracteristica}
                            </li>
                          )
                        )
                      ) : (
                        <li className="flex items-center">
                          <div className="w-4 h-4 flex items-center justify-center mr-3">
                            <i className="ri-close-line text-red-500"></i>
                          </div>
                          No hay características disponibles
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm whitespace-nowrap">
                    Descripción
                  </button>
                </nav>
              </div>
              <div className="p-8">
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {detallado.descripcion}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse cum consectetur adipisci inventore vitae. Non,
                    reprehenderit voluptatibus deserunt, assumenda, expedita
                    necessitatibus mollitia cum vero quibusdam voluptas minus
                    beatae? Voluptas omnis vitae maxime natus voluptatibus
                    voluptate, ipsa, temporibus officia odit sint quos pariatur
                    sunt corrupti voluptatem. Impedit obcaecati aperiam expedita
                    architecto!
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias non ducimus molestias repellendus aut dolorum quod ea
                    soluta fugiat! Explicabo dicta eum impedit deleniti
                    distinctio nostrum commodi assumenda. Facilis at culpa quo
                    quae nisi nulla assumenda eius dolorem dolore animi
                    mollitia, minima molestiae iure aliquid veniam enim sequi
                    eaque nostrum.
                  </p>
                </div>
              </div>
            </div>

            <ProductosRelacionadosSeccion
              relacionadosCategoria={detallado.categoria}
              idProducto={detallado.id}
            />
          </main>
        </div>
      </div>
    </>
  );
}
