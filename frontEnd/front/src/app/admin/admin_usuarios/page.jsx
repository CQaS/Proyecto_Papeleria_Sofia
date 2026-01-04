import GestorDeConsultasAutenticadas from "@/app/auth/GestorDeConsultasAutenticadas";
import AdminUsuariosTable from "@/components/admin_usuarios_table";
import ToastContainer from "@/components/ToastContainer";

export default async function UsuariosPage() {
  return (
    <>
      <GestorDeConsultasAutenticadas
        TablaComponente={AdminUsuariosTable}
        servicio="getUsuarios"
      />
      <ToastContainer />
    </>
  );
}
