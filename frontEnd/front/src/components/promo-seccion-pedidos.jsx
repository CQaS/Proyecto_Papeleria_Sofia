import { Flame, AlertTriangle } from "lucide-react";
import { getPromociones } from "@/app/routes/promos.routes";
import Link from "next/link";

export default async function PromoSeccionPedidos() {
  const promoResponse = await getPromociones();
  const promociones = promoResponse.success
    ? promoResponse.data.sort(() => Math.random() - 0.5).slice(0, 2)
    : [];

  if (!promoResponse.success) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
          No se encontraron promociones especiales
        </h2>
      </div>
    );
  }

  console.log("Promociones en PromoSeccionPedidos:", promociones);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <Flame className="w-6 h-6 text-red-500 mr-2" />
        Promociones Especiales
      </h2>

      <div className="space-y-4">
        {promociones.map((promo) => (
          <div
            key={promo.id}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-red-600">
                PROMO NUEVA
              </span>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                cod. {promo.codigo}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{promo.titulo}</h3>
            <p className="text-sm text-gray-600 mb-2">{promo.descripcion}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500 ml-1">vence: </span>
                <span className="text-lg font-bold text-blue-600">
                  {new Date(promo.fechaFin).toLocaleDateString("es-ES")}
                </span>
              </div>
              <Link
                href={`/productos?idPromo=${promo.id}`}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors"
              >
                Aprovechar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
