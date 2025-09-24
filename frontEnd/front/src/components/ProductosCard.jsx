// src/components/ProductCard.js
"use client";
/* import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {product.imagenes[0] && (
        <Image
          src={product.imagenes[0].url}
          alt={product.nombre}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <h2 className="text-xl font-semibold">{product.nombre}</h2>
      <p className="text-gray-600">${product.precio}</p>
      <Link href={`/productos/${product.id}`} className="text-blue-500">
        Ver detalles
      </Link>
    </div>
  );
}
 */

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md relative group">
      <div className="h-40 overflow-hidden">
        {product.imagenes.map((p, i) => (
          <img
            key={i}
            src={p.url || "/placeholder.svg"}
            className="w-full h-full object-cover object-top"
          />
        ))}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.nombre}</h3>
        <p className="text-primary-custom font-bold">{product.precio}</p>
      </div>
    </div>
  );
}
