import { TitlePromo, SectionPromo, ContainerPromo, SupayRight } from "./styled";

export default function Promo() {
  return (
    <SectionPromo>
      <ContainerPromo>
        <TitlePromo>TU BOX DE CROSSFIT EN LIMA ESTE</TitlePromo>
        <p>
          SOMOS MÁS QUE UN BOX <span>CROSSFIT</span>, SOMOS UNA COMUNIDAD QUE TE
          AYUDARÁ,
        </p>
        <p>
          TE ENSEÑARA Y TE ALIENTARÁ A CONSEGUIR TUS OBJETIVOS EN EL FITNESS
        </p>
      </ContainerPromo>
      <SupayRight>
        <img src="/assets/img/logo-right.png" loading="lazy" />
      </SupayRight>
    </SectionPromo>
  );
}
