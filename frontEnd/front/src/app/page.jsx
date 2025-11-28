import ContactoSection from "@/components/contactoSection";
import PromosDestacadas from "@/components/promos-destacadas";
import ToastContainer from "@/components/ToastContainer";
import Link from "next/link";

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
                <Link
                  href="/productos"
                  className="text-blue-950 bg-green-400 px-4 py-2 !rounded-button font-medium hover:bg-blue-100 transition-colors duration-500 whitespace-nowrap rounded-lg hidden md:block"
                >
                  Ver productos
                </Link>
                <Link
                  href="#contacto"
                  className="text-blue-950 bg-green-400 px-4 py-2 !rounded-button font-medium hover:bg-blue-100 transition-colors duration-500 whitespace-nowrap rounded-lg hidden md:block"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promociones Destacadas */}
      <PromosDestacadas />
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
                <Link href="/productos?categoria=cuadernos">
                  <i className="ri-book-line ri-2x text-primary"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Cuadernos</h3>
            </div>
            {/* Producto 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <Link href="/productos?categoria=lapices">
                  <i className="ri-pencil-line ri-2x text-green-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Lápices</h3>
            </div>
            {/* Producto 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                <Link href="/productos?categoria=carpetas">
                  <i className="ri-folder-line ri-2x text-yellow-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Carpetas</h3>
            </div>
            {/* Producto 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <Link href="/productos?categoria=pinturas">
                  <i className="ri-paint-brush-line ri-2x text-red-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Pinturas</h3>
            </div>
            {/* Producto 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <Link href="/productos?categoria=tijeras">
                  <i className="ri-scissors-line ri-2x text-purple-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Tijeras</h3>
            </div>
            {/* Producto 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                <Link href="/productos?categoria=notas-adhesivas">
                  <i className="ri-sticky-note-line ri-2x text-pink-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Notas Adhesivas</h3>
            </div>
            {/* Producto 7 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                <Link href="/productos?categoria=reglas">
                  <i className="ri-ruler-line ri-2x text-indigo-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Reglas</h3>
            </div>
            {/* Producto 8 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                <Link href="/productos?categoria=calculadoras">
                  <i className="ri-calculator-line ri-2x text-teal-600"></i>
                </Link>
              </div>
              <h3 className="font-medium text-gray-900">Calculadoras</h3>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/productos">
              <button className=" border-indigo-600 px-6 py-3 !rounded-button hover:bg-gray-50 transition-colors text-indigo-600 font-medium whitespace-nowrap">
                Ver todos los productos
              </button>
            </Link>
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
                <p className="text-sm text-gray-700">Confirma</p>
              </div>
            </div>
            <a
              href="/pedidos"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Hacer pedido
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <ContactoSection />
      <ToastContainer />
    </>
  );
}
