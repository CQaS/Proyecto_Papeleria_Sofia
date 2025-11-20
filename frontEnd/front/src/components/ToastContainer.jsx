"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

let toastId = 0;
const listeners = [];

export const toast = (type = "success", title = "Éxito", message = "") => {
  const id = ++toastId;
  const newToast = { id, type, title, message };

  // Notificar a todos los ToastContainer que hay un nuevo toast
  listeners.forEach((setToasts) => setToasts((prev) => [...prev, newToast]));

  // Auto-eliminar después de 4 segundos
  setTimeout(() => toast.dismiss(id), 5000);
};

toast.dismiss = (id) => {
  listeners.forEach((setToasts) =>
    setToasts((prev) => prev.filter((t) => t.id !== id))
  );
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-amber-600",
    info: "bg-blue-600",
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`${
            colors[t.type]
          } text-white rounded-xl shadow-2xl p-4 max-w-sm animate-in slide-in-from-bottom duration-300`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-semibold text-lg">{t.title}</p>
              {t.message && (
                <p className="text-sm opacity-90 mt-1">{t.message}</p>
              )}
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-white/70 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
