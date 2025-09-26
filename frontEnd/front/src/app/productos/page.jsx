import { Suspense } from "react";
import { getProductById } from "../routes/productos.routes";
import { getPromoById } from "../routes/promos.routes";
import PromocionCard from "../../components/PromoCard";
import BackButton from "@/components/BackBtn";
import Loading from "../loading";

import ProductosCategoriasSection from "@/components/productos-categoria-section";
import PromocionSeccion from "@/components/promos-section";

export default async function ProductosPage({ searchParams }) {
  const categoria =
    typeof searchParams?.categoria === "string"
      ? searchParams.categoria
      : undefined;
  const id = typeof searchParams?.id === "string" ? searchParams.id : undefined;
  const idPromo =
    typeof searchParams?.idPromo === "string"
      ? searchParams.idPromo
      : undefined;

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto p-4">
        {id ? (
          // Vista de detalle: Producto
          <ProductoDetalles id={id} />
        ) : idPromo ? (
          // Vista de detalle: Promoción
          <PromoDetalle idPromo={idPromo} />
        ) : categoria ? (
          // Vista de lista: Productos por categoría
          <ProductoCategoria categoria={categoria} />
        ) : (
          // Vista de lista: Todos los productos y promociones
          <ProductosLista />
        )}
      </div>
    </Suspense>
  );
}

async function ProductoDetalles({ id }) {
  const productResponse = await getProductById(id);
  if (!productResponse.success) {
    return (
      <div className="text-center text-red-600">
        <p>Error: {productResponse.message}</p>
      </div>
    );
  }

  const product = productResponse.data;
  return (
    <div>
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {product.imagenes?.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={product.nombre}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
          ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold font-['Pacifico'] text-primary">
            {product.nombre}
          </h1>
          <p className="text-xl text-gray-600">${product.precio}</p>
          <p>{product.descripcion}</p>
          <p className="text-green-600">Stock: {product.stock}</p>
          <p>Categoría: {product.categoria}</p>
          <button className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors duration-500 mt-4">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

async function PromoDetalle({ idPromo }) {
  const promoResponse = await getPromoById(idPromo);
  if (!promoResponse.success) {
    return (
      <div className="text-center text-red-600">
        <p>Error: {promoResponse.message}</p>
      </div>
    );
  }

  const promocion = promoResponse.data;
  return (
    <div className="pt-20">
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Nuestra promocion vigente
          </h1>
        </div>
      </section>
      <div>
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PromocionCard promocion={promocion} />
        </div>
      </div>
    </div>
  );
}

async function ProductoCategoria({ categoria }) {
  return (
    <div>
      <h1 className="text-2xl font-bold font-['Pacifico'] text-primary mb-4">
        {categoria ? `Productos de ${categoria}` : "Productos y Promociones"}
      </h1>

      {/* Sección de productos por categoría */}

      <ProductosCategoriasSection />

      {/* Sección de promociones */}

      <PromocionSeccion />
    </div>
  );
}

async function ProductosLista() {
  return (
    <>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Nuestro catálogo y promociones
          </h1>
        </div>
      </section>
      <PromocionSeccion />
      <ProductosCategoriasSection />
    </>
  );
}
