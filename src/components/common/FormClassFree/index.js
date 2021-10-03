import { ContainerForm, ContainerInput, ButtonForm } from "./styled";
export default function FormClassFree() {
  return (
    <ContainerForm>
      <form>
        <ContainerInput>
          <label>NOMBRES</label>
          <input type="text"></input>
        </ContainerInput>
        <ContainerInput>
          <label>NÚMERO DE CELULAR</label>
          <input type="text"></input>
        </ContainerInput>
        <ContainerInput>
          <label>DNI</label>
          <input type="text"></input>
        </ContainerInput>
        <ButtonForm>SOLICITAR PRUEBA</ButtonForm>
      </form>
    </ContainerForm>
  );
}
