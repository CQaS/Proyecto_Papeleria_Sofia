import { Suspense } from "react";
import { getPromociones } from "@/app/routes/promos.routes";
import PromosDestacadasCard from "./promos-destacadas-card";
import Loading from "@/app/loading";

export default async function PromosDestacadas() {
  const promoResponse = await getPromociones();
  const promos = promoResponse.success
    ? promoResponse.data.sort(() => Math.random() - 0.5).slice(0, 3)
    : [];

  return (
    <Suspense fallback={<Loading />}>
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
          {promoResponse.success ? (
            promos.length === 0 ? (
              <p className="text-center text-gray-600">
                No hay promociones disponibles.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {promos.map((promo) => (
                  <PromosDestacadasCard key={promo.id} promo={promo} />
                ))}
              </div>
            )
          ) : (
            <p className="text-center text-red-600">
              Error: {promoResponse.message}
            </p>
          )}
        </div>
      </section>
    </Suspense>
  );
}
