import { getProducts, getProductById } from "../app/routes/productos.routes";
import ProductCard from "./ProductosCard";

export default async function ProductosCategoriasSection({ searchParams }) {
  /* 
  let products = [];

    const productResponse = await getProducts(categoria ? { categoria } : {});
    products = productResponse.data || [];

    
   */

  const categoria = searchParams?.categoria;
  let products = [];

  const productResponse = await getProducts(categoria ? { categoria } : {});
  products = productResponse.data || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* School Supplies */}
        <div className="mb-16" id="utiles-escolares">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Útiles escolares
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* General Stationery */}
        {/* <div className="mb-16" id="papeleria-general">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Papelería general
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {generalStationery.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div> */}

        {/* Office Supplies */}
        {/* <div id="articulos-oficina">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Artículos de oficina
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {officeSupplies.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
