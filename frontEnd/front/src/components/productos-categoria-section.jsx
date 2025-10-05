import { Suspense } from "react";
import Loading from "../app/loading";
import { getProducts, getCategorias } from "../app/routes/productos.routes";
import ProductCard from "./ProductosCard";

export default async function ProductosCategoriasSection({ porcategoria }) {
  const categoria = porcategoria ? porcategoria.toUpperCase() : undefined;

  if (categoria) {
    // Mostrar solo productos de la categoría especificada
    const productResponse = await getProducts({ categoria });
    const products = productResponse.success ? productResponse.data : [];

    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-['Pacifico'] text-primary mb-8">
            {categoria
              .replace("_", " ")
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </h2>
          {productResponse.success ? (
            products.length === 0 ? (
              <p className="text-center text-gray-600">
                No hay productos disponibles en {categoria}.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )
          ) : (
            <p className="text-center text-red-600">
              Error: {productResponse.message}
            </p>
          )}
        </div>
      </section>
    );
  }

  // Obtener categorías dinámicamente desde el backend
  const categoriasResponse = await getCategorias();
  if (!categoriasResponse.success) {
    return (
      <Suspense fallback={<Loading />}>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-center text-red-600">
              Error al cargar categorías: {categoriasResponse.message}
            </p>
          </div>
        </section>
      </Suspense>
    );
  }

  const categories = categoriasResponse.data || [];
  if (categories.length === 0) {
    return (
      <Suspense fallback={<Loading />}>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">
              No hay categorías disponibles.
            </p>
          </div>
        </section>
      </Suspense>
    );
  }

  // Obtener productos para cada categoría (máximo 4 por categoría)
  const categoryPromises = categories.map((cat) =>
    getProducts({ categoria: cat })
  );
  const categoryResponses = await Promise.all(categoryPromises);
  const categoryProducts = categoryResponses.map((res, idx) => ({
    name: categories[idx]
      .replace("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    id: categories[idx].toLowerCase().replace("_", "-"),
    products: res.success ? res.data.slice(0, 8) : [],
    error: res.success ? null : res.message,
  }));

  return (
    <Suspense fallback={<Loading />}>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {categoryProducts.map(({ name, id, products, error }) => (
            <div key={id} className="mb-16" id={id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{name}</h2>
              {error ? (
                <p className="text-center text-red-600">Error: {error}</p>
              ) : products.length === 0 ? (
                <p className="text-center text-gray-600">
                  No hay productos disponibles en {name}.
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
}
