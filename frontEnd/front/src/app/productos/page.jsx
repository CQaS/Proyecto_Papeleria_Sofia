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

  // Título dinámico
  const getTituloDinamico = () => {
    if (id) return `Detalles del producto #${id}`;
    if (idPromo) return `Detalles de la promoción #${idPromo}`;
    if (categoria) return `Productos de ${formatCategoria(categoria)}`;
    return "Todos los productos y promociones";
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto p-4">
        <div className="pt-20">
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                {getTituloDinamico()}
              </h1>
            </div>
          </section>

          {/* Renderizado condicional limpio */}
          {id ? (
            <ProductoDetalles id={id} />
          ) : idPromo ? (
            <PromoDetalles idPromo={idPromo} />
          ) : categoria ? (
            <ProductoCategoria categoria={categoria} />
          ) : (
            <ProductosLista />
          )}
        </div>
      </div>
    </Suspense>
  );
}

// === Detalle de producto ===
async function ProductoDetalles({ id }) {
  const productResponse = await getProductById(id);

  if (!productResponse.success) {
    return (
      <div className="text-center text-red-600">
        <p>Error: {productResponse.message}</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductoDetallado detallado={productResponse.data} />
    </Suspense>
  );
}

// === Detalle de promoción ===
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

// === Productos por categoría ===
async function ProductoCategoria({ categoria }) {
  return (
    <div>
      <ProductosCategoriasSection porcategoria={categoria} />
      <PromocionSeccion />
    </div>
  );
}

// === Lista general (todos los productos y promociones) ===
async function ProductosLista() {
  return (
    <>
      <PromocionSeccion />
      <ProductosCategoriasSection />
    </>
  );
}

// === Formatear categoría ===
function formatCategoria(categoria) {
  return categoria
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
