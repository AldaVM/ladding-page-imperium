import { TitleForm, ContainerTextClassFree, ListClassFree } from "./styled";

export default function ContentClassFree() {
  return (
    <ContainerTextClassFree>
      <TitleForm>
        PRUEBA UNA CLASE <span>GRATUITA</span>
      </TitleForm>
      <ListClassFree>
        <li>CLASES GRUPALES DE UNA HORA DE DUREACCIÓN</li>
        <li>ENTRAMIENTOS ASESORADOS POR UN COACH</li>
        <li>EQUIPAMIENTO EXCLUSIVO DE CROSSFIT</li>
      </ListClassFree>
    </ContainerTextClassFree>
  );
}
