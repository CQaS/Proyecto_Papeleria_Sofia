import GestorDeConsultasAutenticadas from "@/app/auth/GestorDeConsultasAutenticadas";
import AdminConsultasTable from "@/components/admin_consultas_table";
import ToastContainer from "@/components/ToastContainer";

export default async function ConsultasPage() {
  return (
    <>
      <GestorDeConsultasAutenticadas
        TablaComponente={AdminConsultasTable}
        servicio="getConsultas"
      />
      <ToastContainer />
    </>
  );
}
