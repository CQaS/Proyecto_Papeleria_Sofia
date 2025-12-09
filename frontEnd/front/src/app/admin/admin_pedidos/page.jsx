import { getPedidos } from "@/app/routes/pedidos.routes";
import AdminPedidosTable from "@/components/admin_pedidos_table";
import ToastContainer from "@/components/ToastContainer";

export default async function PedidosPage() {
  const pedidos_lista = await getPedidos();
  return (
    <>
      <AdminPedidosTable pedidosData={pedidos_lista.data} />
      <ToastContainer />
    </>
  );
}
