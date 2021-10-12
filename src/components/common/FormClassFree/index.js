import { useState } from "react";
import { useFormik } from "formik";
import { URL_MAIL_API, SERVICE_SEND_MAIL } from "../../../constants";
import fetchService from "../../../services/fetchService";
import {
  ContainerForm,
  ContainerInput,
  ButtonForm,
  ErrorMessageForm,
  MessageResponse,
} from "./styled";
import { validationSendEmail } from "./validations";

export default function FormClassFree() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState("");

  async function sendEmailInscription(values) {
    try {
      const URL = `${URL_MAIL_API}/${SERVICE_SEND_MAIL}`;
      setIsLoading(true);
      setMessageResponse("");
      const response = await fetchService(URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setIsLoading(false);
      if (response.status >= 200 && response.status < 300) {
        setMessageResponse(
          "Gracias, nos contactaremos contigo lo antes posible."
        );
      } else {
        setMessageResponse(
          "Error al enviar tu solicitud, por favor intenta más tarde"
        );
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      names: "",
      telephone: "",
      dni: "",
    },
    validationSchema: validationSendEmail,
    onSubmit: (values) => {
      sendEmailInscription(values);
    },
  });

  return (
    <ContainerForm>
      <form onSubmit={formik.handleSubmit}>
        <ContainerInput>
          <label htmlFor="names">NOMBRES</label>
          <input
            id="names"
            name="names"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.names}
          ></input>
          <ErrorMessageForm>
            {formik.errors.names ? formik.errors.names : ""}
          </ErrorMessageForm>
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="telephone">NÚMERO DE CELULAR</label>
          <input
            id="telephone"
            name="telephone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.telephone}
          ></input>
          <ErrorMessageForm>
            {formik.errors.telephone ? formik.errors.telephone : ""}
          </ErrorMessageForm>
        </ContainerInput>
        <ContainerInput>
          <label htmlFor="dni">DNI</label>
          <input
            id="dni"
            name="dni"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.dni}
          ></input>
          <ErrorMessageForm>
            {formik.errors.dni ? formik.errors.dni : ""}
          </ErrorMessageForm>
        </ContainerInput>
        <ButtonForm>SOLICITAR PRUEBA</ButtonForm>
      </form>
      <MessageResponse>{isLoading && "Enviando solicitud..."}</MessageResponse>
      <MessageResponse>{messageResponse}</MessageResponse>
    </ContainerForm>
  );
}
