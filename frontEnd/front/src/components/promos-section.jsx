import { getPromociones } from "../app/routes/promos.routes";
import PromocionCard from "./PromoCard";

export default async function PromocionSeccion() {
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
    <section className="py-12" id="promociones">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Promociones activas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map((promocion) => (
            <PromocionCard key={promocion.id} promocionid={promocion.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
