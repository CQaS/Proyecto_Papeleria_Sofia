import Image from "next/image";
import Link from "next/link";

export default async function PromosDestacadasCard({ promo }) {
  console.log(promo);

  return (
    <div className="bg-white rounded shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <Image
          src={promo.imagenes[0].url}
          alt={promo.titulo}
          className="w-full h-full object-cover object-top"
          width={600}
          height={400}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.titulo}</h3>
        <p className="text-gray-600 mb-4">{promo.descripcion}</p>
        <Link
          href={`/productos?idPromo=${promo.id}`}
          className="text-primary-custom font-medium flex items-center hover:underline whitespace-nowrap"
        >
          Ver más <i className="ri-arrow-right-line ml-1"></i>
        </Link>
      </div>
    </div>
  );
}
