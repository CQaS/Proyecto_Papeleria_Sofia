import ClientAccessToken from "@/app/auth/ClienteAccessToken";
import AdminConsultasTable from "@/components/admin_consultas_table";
import ToastContainer from "@/components/ToastContainer";

export default async function PaginaConsultas() {
  return (
    <>
      <ClientAccessToken TablaComponente={AdminConsultasTable} />
      <ToastContainer />
    </>
  );
}
