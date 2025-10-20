import { getRelacionados } from "@/app/routes/productos.routes";
import ProductosRelacionadosCard from "./ProductosRelacionadosCard";

export default async function ProductosRelacionadosSeccion({
  relacionadosCategoria,
  idProducto,
}) {
  const relacionadosResponse = await getRelacionados(relacionadosCategoria);
  const relacionados = relacionadosResponse.success
    ? relacionadosResponse.data
        .filter((product) => product.id !== idProducto)
        .slice(0, 3)
    : [];

  if (!relacionadosResponse.success || relacionados.length === 0) {
    return (
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-xl font-semibold font-['Pacifico'] text-primary mb-6">
          No hay Productos Relacionados para mostrar.
        </h3>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h3 className="text-xl font-semibold font-['Pacifico'] text-primary mb-6">
        Productos Relacionados
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relacionados.map((producto) => (
          <ProductosRelacionadosCard
            key={producto.id}
            productosRelacionado={producto}
          />
        ))}
      </div>
    </div>
  );
}
