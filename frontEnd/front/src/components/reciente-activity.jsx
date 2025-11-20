export function RecentActivity() {
  const activities = [
    {
      icon: "ri-check-line",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Nuevo pedido procesado",
      description: "Pedido #ORD-2024-001234 - hace 5 minutos",
    },
    {
      icon: "ri-add-line",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Producto agregado al inventario",
      description: "Smartphone Samsung Galaxy S24 - hace 15 minutos",
    },
    {
      icon: "ri-user-add-line",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Nuevo usuario registrado",
      description: "carlos.rodriguez@email.com - hace 1 hora",
    },
  ];

  return (
    <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Actividad Reciente
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
          >
            <div
              className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center`}
            >
              <i className={`${activity.icon} ${activity.iconColor}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
