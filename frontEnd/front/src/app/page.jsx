"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 relative">
        <div className="w-full h-[600px] relative">
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"
            style={{
              backgroundImage: "url('/imgs/imgIndex.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl relative z-10 bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Bienvenidos a Papelería SOFIA
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Tu nuevo espacio para encontrar útiles escolares, promociones y
                servicios de impresión y encuadernación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Ver productos
                </button>
                <button className="bg-blue-400 text-primary border border-primary px-6 py-3 !rounded-button font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promociones Destacadas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Promociones Destacadas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras ofertas especiales y aprovecha los mejores
              precios en artículos de papelería y útiles escolares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Promoción 1 */}
            <div className="bg-white rounded shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                {/* Using next/image component */}
                <Image
                  src="https://readdy.ai/api/search-image?query=A%20collection%20of%20colorful%20school%20notebooks%2C%20pens%2C%20and%20pencils%20arranged%20neatly%20on%20a%20clean%20white%20background.%20The%20stationery%20items%20look%20vibrant%20and%20new%2C%20perfect%20for%20back%20to%20school%20promotion.%20Professional%20product%20photography%20with%20soft%20shadows%20and%20excellent%20lighting%20to%20highlight%20the%20colors%20and%20textures%20of%20the%20school%20supplies.&width=600&height=400&seq=12346&orientation=landscape"
                  alt="Promoción Regreso a Clases"
                  className="w-full h-full object-cover object-top"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Regreso a Clases 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Paquetes escolares con descuentos de hasta 30% en cuadernos,
                  lápices y más artículos esenciales.
                </p>
                <button className="text-primary font-medium flex items-center hover:underline whitespace-nowrap">
                  Ver más <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </div>
            </div>
            {/* Promoción 2 */}
            <div className="bg-white rounded shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                {/* Using next/image component */}
                <Image
                  src="https://readdy.ai/api/search-image?query=Modern%20art%20supplies%20including%20watercolor%20paints%2C%20premium%20brushes%2C%20and%20sketchbooks%20arranged%20artistically%20on%20a%20clean%20white%20background.%20The%20art%20materials%20look%20high-quality%20and%20professional%2C%20with%20vibrant%20colors%20and%20textures.%20Professional%20product%20photography%20with%20soft%20shadows%20and%20excellent%20lighting%20to%20showcase%20the%20premium%20art%20supplies.&width=600&height=400&seq=12347&orientation=landscape"
                  alt="Promoción Artistas"
                  className="w-full h-full object-cover object-top"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Semana del Artista
                </h3>
                <p className="text-gray-600 mb-4">
                  Todos los materiales de arte con 25% de descuento. Incluye
                  acuarelas, pinceles y blocks de dibujo.
                </p>
                <button className="text-primary font-medium flex items-center hover:underline whitespace-nowrap">
                  Ver más <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </div>
            </div>
            {/* Promoción 3 */}
            <div className="bg-white rounded shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                {/* Using next/image component */}
                <Image
                  src="https://readdy.ai/api/search-image?query=A%20modern%20office%20desk%20setup%20with%20premium%20stationery%20items%20including%20leather%20notebooks%2C%20elegant%20pens%2C%20desk%20organizers%2C%20and%20planners%20arranged%20neatly%20on%20a%20clean%20white%20background.%20The%20office%20supplies%20look%20sophisticated%20and%20professional.%20Professional%20product%20photography%20with%20soft%20shadows%20and%20excellent%20lighting%20to%20highlight%20the%20premium%20quality%20of%20the%20office%20supplies.&width=600&height=400&seq=12348&orientation=landscape"
                  alt="Promoción Oficina"
                  className="w-full h-full object-cover object-top"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Equipamiento de Oficina
                </h3>
                <p className="text-gray-600 mb-4">
                  Lleva 3 y paga 2 en toda nuestra línea de organizadores,
                  agendas y artículos de escritorio.
                </p>
                <button className="text-primary font-medium flex items-center hover:underline whitespace-nowrap">
                  Ver más <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Productos Populares */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productos Populares
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra selección de artículos más vendidos y encuentra
              todo lo que necesitas para tus proyectos.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Producto 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <i className="ri-book-line ri-2x text-primary"></i>
              </div>
              <h3 className="font-medium text-gray-900">Cuadernos</h3>
            </div>
            {/* Producto 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <i className="ri-pencil-line ri-2x text-green-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Lápices</h3>
            </div>
            {/* Producto 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                <i className="ri-folder-line ri-2x text-yellow-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Carpetas</h3>
            </div>
            {/* Producto 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <i className="ri-paint-brush-line ri-2x text-red-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Pinturas</h3>
            </div>
            {/* Producto 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <i className="ri-scissors-line ri-2x text-purple-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Tijeras</h3>
            </div>
            {/* Producto 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                <i className="ri-sticky-note-line ri-2x text-pink-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Notas Adhesivas</h3>
            </div>
            {/* Producto 7 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                <i className="ri-ruler-line ri-2x text-indigo-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Reglas</h3>
            </div>
            {/* Producto 8 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                <i className="ri-calculator-line ri-2x text-teal-600"></i>
              </div>
              <h3 className="font-medium text-gray-900">Calculadoras</h3>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-white text-primary border border-primary px-6 py-3 !rounded-button font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
              Ver todos los productos
            </button>
          </div>
        </div>
      </section>
      {/* Pedidos de Impresión */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full shadow-md flex items-center justify-center">
              <i className="ri-printer-line ri-2x text-primary"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicio de Impresión y Encuadernación
            </h2>
            <p className="text-gray-600 mb-8">
              Sube tus archivos PDF y solicita impresiones de alta calidad.
              También ofrecemos servicios de encuadernación, plastificado y más
              para tus documentos importantes.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                  <i className="ri-upload-cloud-line ri-xl text-primary"></i>
                </div>
                <p className="text-sm text-gray-700">Sube tu archivo</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                  <i className="ri-settings-line ri-xl text-primary"></i>
                </div>
                <p className="text-sm text-gray-700">Elige opciones</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                  <i className="ri-check-line ri-xl text-primary"></i>
                </div>
                <p className="text-sm text-gray-700">Confirma y paga</p>
              </div>
            </div>
            <button className="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              Hacer pedido
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
