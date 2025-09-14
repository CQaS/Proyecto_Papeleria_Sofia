"use client";
import Image from "next/image";
import Link from "next/link";

export default function PromoCard({ promo }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {promo.imagenes[0] && (
        <Image
          src={promo.imagenes[0].url}
          alt={promo.titulo}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <h2 className="text-xl font-semibold">{promo.titulo}</h2>
      <p className="text-gray-600">{promo.descripcion}</p>
      <div className="mt-2">
        <p className="text-sm font-medium">Productos incluidos:</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {promo.productos.map((item) => (
            <li key={item.productoId}>{item.producto.nombre}</li>
          ))}
        </ul>
      </div>
      <Link
        href={`/productos?idPromo=${promo.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        Ver detalles
      </Link>
    </div>
  );
}
