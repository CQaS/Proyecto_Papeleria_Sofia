import Image from "next/image";

export default async function ProductosRelacionadosCard({
  productosRelacionado,
}) {
  console.log("Producto Relacionado:", productosRelacionado);

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      {productosRelacionado.imagenes[0] && (
        <Image
          src={productosRelacionado.imagenes[0].url || "/placeholder.svg"}
          alt={productosRelacionado.nombre}
          className="w-full h-40 object-cover rounded mb-3"
          width={200}
          height={200}
        />
      )}
      <h4 className="font-medium text-gray-900 mb-2">
        {productosRelacionado.nombre}
      </h4>
      <p className="text-primary font-semibold">
        ${productosRelacionado.precio}
      </p>
    </div>
  );
}
