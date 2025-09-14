import { getProducts, getProductById } from "../routes/productos.routes";
import { getPromociones } from "../routes/promos.routes";
import ProductCard from "../../components/ProductosCard";
import PromoCard from "../../components/PromoCard";
import BackButton from "@/components/BackBtn";

export default async function ProductosPage({ searchParams }) {
  const categoria = searchParams?.categoria;
  const id = searchParams?.id;

  if (id) {
    console.log("Cargando detalle del producto con ID:", id);
    // Vista de detalle: Solo un producto
    const productResponse = await getProductById(id);
    if (productResponse.success) {
      return (
        <div className="container mx-auto p-4">
          <BackButton />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {productResponse.data.imagenes?.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={productResponse.data.nombre}
                  className="w-full h-64 object-cover mb-4"
                />
              ))}
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {productResponse.data.nombre}
              </h1>
              <p className="text-xl text-gray-600">
                ${productResponse.data.precio}
              </p>
              <p>{productResponse.data.descripcion}</p>
              <p className="text-green-600">
                Stock: {productResponse.data.stock}
              </p>
              <p>Categoría: {productResponse.data.categoria}</p>
              <button className="bg-blue-500 text-white p-2 rounded">
                Agregar al carrito
              </button>
            </div>
          </div>
          {/* Opcional: Productos relacionados */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Productos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Fetch y map de productos similares */}
            </div>
          </section>
        </div>
      );
    } else {
      return <div>Error al cargar producto</div>;
    }
  } else {
    let products = [];
    let promociones = [];

    const productResponse = await getProducts(categoria ? { categoria } : {});
    products = productResponse.data || [];

    const promoResponse = await getPromociones();
    promociones = promoResponse.data || [];

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          {categoria ? `Productos de ${categoria}` : "Productos y Promociones"}
        </h1>

        {/* Sección de productos */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {categoria ? `Productos en ${categoria}` : "Nuestros Productos"}
          </h2>
          {products.length === 0 ? (
            <p>
              No hay productos disponibles {categoria ? `en ${categoria}` : ""}.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Sección de promociones */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            {categoria ? `Promos para ${categoria}` : "Promociones Destacadas"}
          </h2>
          {promociones.length === 0 ? (
            <p>No hay promociones disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promociones.map((promo) => (
                <PromoCard key={promo.id} promo={promo} />
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}
