// src/components/ProductCard.js
"use client";

import Image from "next/image";

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
          <Image
            key={i}
            width={200}
            height={200}
            src={p.url || "/placeholder.svg"}
            alt={product.nombre}
            className="w-full h-full object-cover object-top"
          />
        ))}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.nombre}</h3>
        <p className="text-blue-700 font-bold">${product.precio}</p>
      </div>
      <div className="absolute inset-0 bg-white/95 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex flex-col p-4">
        <h3 className="font-medium text-gray-900 mb-2">{product.nombre}</h3>
        <div className="space-y-2 text-sm text-gray-600 flex-grow">
          <p className="font-medium text-secondary-custom">Características:</p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <i className="ri-checkbox-circle-line mt-1 mr-2"></i>
              <span>{product.descripcion}</span>
            </li>
          </ul>
        </div>
        <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors whitespace-nowrap">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
