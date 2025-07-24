export const generarSlug = (nombre) => {
    return nombre
        .toLowerCase() // convierte todo a minúsculas
        .normalize("NFD") // quita tildes y acentos
        .replace(/[\u0300-\u036f]/g, "") // borra caracteres especiales combinados
        .replace(/[^a-z0-9\s-]/g, "") // elimina todo lo que no sea letras, números, espacio o guión
        .trim() // elimina espacios al principio y al final
        .replace(/\s+/g, "-") // reemplaza espacios por guiones
        .replace(/-+/g, "-"); // evita múltiples guiones seguidos
}