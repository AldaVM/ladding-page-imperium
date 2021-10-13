import {
  MainClassFree,
  TitleClassFree,
  ContainerFrom,
  ContainerImage,
  Container,
  ContrasterConteiner,
} from "./styled";
import ContentClassFree from "../ContentClassFree";
import FormClassFree from "../FormClassFree";

export default function ClassFree() {
  return (
    <Container>
      <ContainerImage>
        <img
          src="assets/img/banner4-min.jpg"
          alt={`Imagen panoramica del BOX imperium cross`}
          loading="lazy"
        />
      </ContainerImage>
      <ContrasterConteiner />
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
