import { getPromociones } from "../app/routes/productos.routes";
import PromocionCard from "./PromoCard";

export default async function PromocionSeccion() {
  let promociones = [];
  const promoResponse = await getPromociones();
  promociones = promoResponse.success ? promoResponse.data : [];

  return (
    <section className="py-12" id="promociones">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Promociones activas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map((promocion) => (
            <PromocionCard key={promocion.id} promocion={promocion} />
          ))}
        </div>
      </div>
    </section>
  );
}
