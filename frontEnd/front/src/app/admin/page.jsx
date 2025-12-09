import { DashboardCard } from "@/components/dashboard-card";
import { RecentActivity } from "@/components/reciente-activity";
import { getPedidosLength } from "../routes/pedidos.routes";

export default async function DashboardPage() {
  const length_Pedidos = await getPedidosLength();
  const dashboardCards = [
    {
      icon: "ri-dashboard-3-line",
      bgColor: "bg-blue-100",
      hoverBgColor: "group-hover:bg-blue-200",
      iconColor: "text-blue-600",
      title: "Formulario de Pedidos",
      link: "/pedidos",
      description: "Vista general de estadísticas y métricas de pedidos",
      metric: "0",
      metricColor: "text-blue-600",
    },
    {
      icon: "ri-file-list-3-line",
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      iconColor: "text-green-600",
      title: "Lista de Pedidos",
      link: "/admin/admin_pedidos",
      description: "Gestiona todos los pedidos del sistema",
      metric: `${length_Pedidos}`,
      metricColor: "text-green-600",
    },
    {
      icon: "ri-box-3-line",
      bgColor: "bg-purple-100",
      hoverBgColor: "group-hover:bg-purple-200",
      iconColor: "text-purple-600",
      title: "Gestión de Artículos",
      link: "admin/productos",
      description: "Administra el inventario y catálogo de productos",
      metric: "1,234",
      metricColor: "text-purple-600",
    },
    {
      icon: "ri-edit-box-line",
      bgColor: "bg-orange-100",
      hoverBgColor: "group-hover:bg-orange-200",
      iconColor: "text-orange-600",
      title: "ABM de Artículos",
      link: "admin/productos/abm",
      description: "Crear, editar y eliminar productos",
      metric: "Formularios",
      metricColor: "text-gray-500",
      metricSize: "text-sm",
      metricWeight: "font-medium",
    },
    {
      icon: "ri-group-line",
      bgColor: "bg-red-100",
      hoverBgColor: "group-hover:bg-red-200",
      iconColor: "text-red-600",
      title: "Gestión de Usuarios",
      link: "admin/usuarios",
      description: "Administra cuentas y permisos de usuarios",
      metric: "456",
      metricColor: "text-red-600",
    },
    {
      icon: "ri-question-line",
      bgColor: "bg-indigo-100",
      hoverBgColor: "group-hover:bg-indigo-200",
      iconColor: "text-indigo-600",
      title: "Gestion de consultas",
      link: "admin/admin_consultas",
      description: "Leer y responder consultas de clientes",
      metric: "Responder...",
      metricColor: "text-gray-500",
      metricSize: "text-sm",
      metricWeight: "font-medium",
    },
    {
      icon: "ri-wallet-3-line",
      bgColor: "bg-teal-100",
      hoverBgColor: "group-hover:bg-teal-200",
      iconColor: "text-teal-600",
      title: "Gestión de Pagos",
      link: "#",
      description: "Administra transacciones y métodos de pago",
      metric: "€12,450",
      metricColor: "text-teal-600",
    },
    {
      icon: "ri-settings-2-line",
      bgColor: "bg-yellow-100",
      hoverBgColor: "group-hover:bg-yellow-200",
      iconColor: "text-yellow-600",
      title: "Configuración",
      link: "#",
      description: "Ajustes generales del sistema",
      metric: "Sistema",
      metricColor: "text-gray-500",
      metricSize: "text-sm",
      metricWeight: "font-medium",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <main className="pt-20 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard Principal
            </h1>
            <p className="text-gray-600">
              Accede rápidamente a todas las funciones de administración
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => (
              <DashboardCard key={index} {...card} />
            ))}
          </div>

          <RecentActivity />
        </div>
      </main>
    </div>
  );
}
