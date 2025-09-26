"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/productos")}
      className="mb-4 text-primary hover:text-primary/80 transition-colors duration-300"
    >
      ← Volver a productos
    </button>
  );
}
