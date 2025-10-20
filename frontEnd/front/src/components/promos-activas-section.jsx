import { getPromociones } from "@/app/routes/promos.routes";
import Link from "next/link";

export default async function PromosActivasSeccion() {
  const promoResponse = await getPromociones();
  const promociones = promoResponse.success
    ? promoResponse.data.sort(() => Math.random() - 0.5).slice(0, 3)
    : [];

  if (!promoResponse.success) {
    return (
      <div className="text-center text-red-600">
        <p>Error: {promoResponse.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {promociones.map((promo) => (
        <div
          key={promo.id}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200"
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full mr-3">
              <i className="ri-book-line text-white text-sm"></i>
            </div>
            <span className="font-semibold text-blue-900">{promo.titulo}</span>
          </div>
          <p className="text-sm text-blue-800 mb-3">{promo.descripcion}</p>
          <Link
            href={`/productos?idPromo=${promo.id}`}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-button text-sm font-medium hover:bg-blue-600 transition-colors whitespace-nowrap text-center"
          >
            Ver Oferta
          </Link>
        </div>
      ))}

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 flex items-center justify-center bg-purple-500 rounded-full mr-3">
            <i className="ri-truck-line text-white text-sm"></i>
          </div>
          <span className="font-semibold text-purple-900">Envío Gratis</span>
        </div>
        <p className="text-sm text-purple-800 mb-3">
          En compras superiores a $30. Válido para toda la ciudad
        </p>
        <Link
          href="/envio"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-button text-sm font-medium hover:bg-purple-600 transition-colors whitespace-nowrap text-center"
        >
          Más Info
        </Link>
      </div>
    </div>
  );
}
