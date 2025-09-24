"use client";

export default function PromocionCard({ promocion }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg group relative">
      {promocion.imagenes[0] && (
        <div className="h-48 overflow-hidden">
          <img
            src={promocion.imagenes[0].url || "/placeholder.svg"}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {promocion.titulo}
        </h3>
        <p className="text-gray-600 mb-4">{promocion.descripcion}</p>
        <button className="text-primary-custom font-medium flex items-center hover:underline whitespace-nowrap">
          Ver más <i className="ri-arrow-right-line ml-1"></i>
        </button>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/95 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {promocion.titulo}
        </h3>
        <div className="space-y-4 text-gray-600">
          <p className="font-medium text-secondary-custom">
            {promocion.codigo}
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <i className="ri-checkbox-circle-line text-secondary-custom mt-1 mr-2"></i>
              <span>{promocion.titulo}</span>
            </li>
            <li className="flex items-start">
              <i className="ri-checkbox-circle-line text-secondary-custom mt-1 mr-2"></i>
              <span>{promocion.descripcion}</span>
            </li>
          </ul>
          <p className="font-medium">
            Válido hasta:{" "}
            {new Date(promocion.fechaFin).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
        <button className="mt-auto bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-orange-500 transition-colors whitespace-nowrap w-full">
          Aprovechar promoción
        </button>
      </div>
    </div>
  );
}
