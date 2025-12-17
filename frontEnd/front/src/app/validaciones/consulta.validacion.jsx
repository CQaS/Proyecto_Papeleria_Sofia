import * as Yup from "yup";

export const esquemaRespuestaAdministrador = Yup.object().shape({
  mensajeRespuesta: Yup.string()
    .required("La respuesta no puede estar vacía")
    .min(10, "Escribe al menos 10 caracteres para que sea una respuesta clara")
    .max(1000, "La respuesta es demasiado extensa (máximo 1000 caracteres)"),
});
