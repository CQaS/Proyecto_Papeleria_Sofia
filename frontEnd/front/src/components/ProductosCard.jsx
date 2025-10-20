// src/components/ProductCard.js
"use client";

import Image from "next/image";
import Link from "next/link";

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
        <Link href={`/productos?id=${product.id}`}>
          <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors whitespace-nowrap">
            Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
