import { Suspense } from "react";
import Loading from "../loading";
import PromoSeccionPedidos from "@/components/promo-seccion-pedidos";
import ProductosSeccionPedidos from "@/components/productos-seccion-pedidos";
import PedidosForm from "@/components/pedidos-form";
import ResumenPedido from "@/components/resumen-pedido";
import { PedidoProvider } from "@/context/PedidoContext";
import ToastContainer from "@/components/ToastContainer";

export default function PedidosPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-gray-50 min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 pt-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Pedidos de Impresiones
            </h1>
            <p className="text-gray-600">
              Sube tu archivo y personaliza tu pedido de impresión
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-6">
              <PromoSeccionPedidos />
              <ProductosSeccionPedidos />
            </div>

            <PedidoProvider>
              <div className="lg:col-span-8 space-y-6">
                <PedidosForm />
                <ResumenPedido />
              </div>

              <ToastContainer />
            </PedidoProvider>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
