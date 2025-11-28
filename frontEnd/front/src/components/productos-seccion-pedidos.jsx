import { getProducts } from "@/app/routes/productos.routes";
import { ShoppingBag, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stationeryItems = [
  {
    name: "Cuadernos Premium",
    price: "Desde €3.50",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20premium%20notebook%20with%20spiral%20binding%20on%20clean%20white%20background%2C%20modern%20stationery%20design%2C%20professional%20office%20supplies%20photography&width=60&height=60&seq=notebook1&orientation=squarish",
  },
  {
    name: "Bolígrafos de Colores",
    price: "Pack desde €2.25",
    image:
      "https://readdy.ai/api/search-image?query=set%20of%20colorful%20ballpoint%20pens%20arranged%20neatly%20on%20white%20background%2C%20office%20supplies%20photography%2C%20professional%20stationery%20collection&width=60&height=60&seq=pens1&orientation=squarish",
  },
  {
    name: "Carpetas Organizadoras",
    price: "Desde €1.80",
    image:
      "https://readdy.ai/api/search-image?query=organized%20file%20folders%20in%20different%20colors%20on%20clean%20white%20background%2C%20office%20organization%20supplies%2C%20professional%20document%20storage&width=60&height=60&seq=folders1&orientation=squarish",
  },
  {
    name: "Material de Oficina",
    price: "Varios precios",
    image:
      "https://readdy.ai/api/search-image?query=adhesive%20tape%20dispenser%20and%20rolls%20on%20white%20background%2C%20office%20supplies%20photography%2C%20professional%20desk%20accessories&width=60&height=60&seq=tape1&orientation=squarish",
  },
];

export default async function ProductosSeccionPedidos() {
  const listaDeProductos = await getProducts();
  let productosAleatorios;

  listaDeProductos.data.length < 5
    ? (productosAleatorios = listaDeProductos.data)
    : (productosAleatorios = listaDeProductos.data
        .sort(() => Math.random() - 0.5)
        .slice(0, 4));

  console.log(productosAleatorios);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <ShoppingBag className="w-6 h-6 text-blue-500 mr-2" />
        Productos de Papelería
      </h2>

      <div className="space-y-4">
        {productosAleatorios.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Image
              src={item.imagenes[0].url || "/placeholder.svg"}
              alt={item.nombre}
              width={48}
              height={48}
              className="rounded object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.nombre}</h3>
              <p className="text-sm text-gray-600">Desde ${item.precio}</p>
            </div>
            <Link href={`/productos?idProducto=${item.id}`}>
              <ChevronRight className="w-7 h-7 text-gray-400" />
            </Link>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
        <Link href="/productos">Ver toda la papelería</Link>
      </button>
    </div>
  );
}
