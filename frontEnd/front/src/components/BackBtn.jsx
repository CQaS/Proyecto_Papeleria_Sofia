// components/BackButton.js
"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/productos")}
      className="mb-4 text-blue-500"
    >
      ← Volver a productos
    </button>
  );
}
