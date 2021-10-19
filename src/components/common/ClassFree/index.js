import {
  MainClassFree,
  TitleClassFree,
  ContainerFrom,
  Container,
} from "./styled";
import ContentClassFree from "../ContentClassFree";
import FormClassFree from "../FormClassFree";

export default function ClassFree() {
  return (
    <Container id="clase-gratis">
      <MainClassFree>
        <TitleClassFree>
          <span>¿</span>LISTO PARA DESCUBRIR DE LO QUE ERES CAPAZ<span>?</span>
        </TitleClassFree>
        <ContainerFrom>
          <ContentClassFree />
          <FormClassFree />
        </ContainerFrom>
      </MainClassFree>
    </Container>
  );
}
