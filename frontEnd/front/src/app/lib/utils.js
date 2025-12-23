import {
    clsx
} from "clsx"
import {
    twMerge
} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/**
 * @description Dediucir el estado de la consulta basado en las banderas booleanas.
 * @param {object} consulta - El objeto completo de la consulta (con leido, resuelto, respuesta).
 * @returns {{ estado: string, clases: string }} - El estado y las clases CSS de Tailwind.
 */
export const deducirEstadoConsulta = (consulta) => {
    const estados = {
        PENDIENTE: {
            estado: "Pendiente",
            clases: "bg-orange-100 text-orange-800"
        },
        RESPONDIDA: {
            estado: "Respondida",
            clases: "bg-blue-100 text-blue-800"
        },
        RESUELTA: {
            estado: "Resuelta",
            clases: "bg-green-100 text-green-800"
        },
        VISTA: {
            estado: "Vista",
            clases: "bg-gray-100 text-gray-800"
        },
    };

    if (consulta.resuelto) {
        return estados.RESUELTA;
    }

    if (!consulta.resuelto) {
        return estados.PENDIENTE;
    }

    if (consulta.respuesta !== null && consulta.respuesta.trim() !== "") {
        return estados.RESPONDIDA;
    }

    if (consulta.leido) {
        return estados.VISTA;
    }

    return estados.PENDIENTE;
};