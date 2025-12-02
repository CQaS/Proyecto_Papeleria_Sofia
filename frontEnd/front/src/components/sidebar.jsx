export function Sidebar() {
  const menuItems = [
    {
      icon: "ri-dashboard-line",
      label: "Dashboard Principal",
      link: "/admin",
      active: false,
    },
    {
      icon: "ri-store-line",
      label: "Gestión de Inventario",
      link: "#",
      active: false,
    },
    {
      icon: "ri-file-list-line",
      label: "Gestión de Pedidos",
      link: "/admin/admin_pedidos",
      active: true,
    },
    {
      icon: "ri-user-line",
      label: "Gestión de Clientes",
      link: "#",
      active: false,
    },
    {
      icon: "ri-printer-line",
      label: "Equipos de Impresión",
      link: "#",
      active: false,
    },
    {
      icon: "ri-bar-chart-line",
      label: "Reportes y Análisis",
      link: "#",
      active: false,
    },
    { icon: "ri-wallet-line", label: "Facturación", link: "#", active: false },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Módulos del Sistema
        </h3>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={
                item.active
                  ? "flex items-center gap-3 px-3 py-2 rounded bg-[#3b82f6] text-white"
                  : "flex items-center gap-3 px-3 py-2 rounded text-gray-600 hover:bg-gray-50 hover:text-[#3b82f6] transition-colors"
              }
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={item.icon} />
              </div>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
