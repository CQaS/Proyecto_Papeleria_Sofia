import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-['Pacifico'] mb-4">Papelería SOFIA</h3>
            <p className="text-gray-400 mb-4">
              Tu espacio para encontrar útiles escolares, promociones y
              servicios de impresión.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Promociones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pedidos de impresión
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="ri-map-pin-line mr-2 mt-1"></i>
                <span className="text-gray-400">
                  Av. Constitución 1254, Col. Centro, Ciudad de México
                </span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span className="text-gray-400">(55) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span className="text-gray-400">
                  contacto@papeleriasofia.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Lunes a Viernes: 9:00 - 20:00</li>
              <li className="text-gray-400">Sábados: 9:00 - 18:00</li>
              <li className="text-gray-400">Domingos: 10:00 - 14:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Papelería SOFIA. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Gracias por confiar en Papelería SOFIA.
          </p>
        </div>
      </div>
    </footer>
  );
}
