import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSendEmail = Yup.object({
  names: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Formato no válido.")
    .max(250)
    .required("Los nombres son requeridos"),
  telephone: Yup.string()
    .matches(phoneRegExp, "Formato no válido.")
    .min(9, "Formato no válido.")
    .max(12, "Formato no válido.")
    .required("El número de celular es requerido."),
  dni: Yup.string()
    .matches(/[1-9]/, "Formato no válido.")
    .min(8, "Formato no válido.")
    .max(8, "Formato no válido.")
    .required("El DNI es requerido"),
});
