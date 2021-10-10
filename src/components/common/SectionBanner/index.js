import { ContainerDobleBanner } from "./styled";
import Banner from "../Banner";

export default function SectionBanner() {
  return (
    <ContainerDobleBanner>
      <Banner
        title="CROSSFIT"
        description="¿QUÉ ES EL CROSSFIT?"
        message="LEER MÁS"
        image="assets/img/banner1-min.jpg"
        link="#"
      />
      <Banner
        title="EMPIEZA HOY"
        description="PRUEBA UNA CLASE"
        message="SOLICITAR"
        image="assets/img/banner2-min.jpg"
        link="#"
      />
    </ContainerDobleBanner>
  );
}
