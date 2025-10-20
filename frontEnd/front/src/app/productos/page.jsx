import { Suspense } from "react";
import { getProductById } from "../routes/productos.routes";
import PromocionCard from "../../components/PromoCard";
import BackButton from "@/components/BackBtn";
import Loading from "../loading";

import ProductosCategoriasSection from "@/components/productos-categoria-section";
import PromocionSeccion from "@/components/promos-section";
import ProductoDetallado from "@/components/producto_detalles";

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
        <div className="pt-20">
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                {id
                  ? `Detalles del producto N:${id}`
                  : idPromo
                  ? `Detalles de la promoción N:${idPromo}`
                  : categoria
                  ? `Productos de ${categoria}`
                  : "Todos los productos y promociones"}
              </h1>
            </div>
          </section>
          {id ? (
            // Vista de detalle: Producto
            <ProductoDetalles id={id} />
          ) : idPromo ? (
            // Vista de detalle: Promoción
            <PromoDetalles idPromo={idPromo} />
          ) : categoria ? (
            // Vista de lista: Productos por categoría
            <ProductoCategoria porcategoria={categoria} />
          ) : (
            // Vista de lista: Todos los productos y promociones
            <ProductosLista />
          )}
        </div>
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
    <Suspense fallback={<Loading />}>
      <ProductoDetallado detallado={product} />
    </Suspense>
  );
}

async function PromoDetalles({ idPromo }) {
  return (
    <div>
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PromocionCard promocionid={idPromo} />
      </div>
    </div>
  );
}

async function ProductoCategoria({ porcategoria }) {
  return (
    <div>
      <ProductosCategoriasSection porcategoria={porcategoria} />
      <PromocionSeccion />
    </div>
  );
}

async function ProductosLista() {
  return (
    <>
      <PromocionSeccion />
      <ProductosCategoriasSection />
    </>
  );
}
