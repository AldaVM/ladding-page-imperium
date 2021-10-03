import { ContainerList, Container } from "./styled";
import CardTopic from "../CardTopic";

export default function ListTopics() {
  return (
    <Container>
      <ContainerList>
        <CardTopic
          title="HALTEROFILIA"
          image="assets/img/halterofilia-min.jpg"
          description="Atleta ejecutando un moviento de halterofilia"
        />
        <CardTopic
          title="ENDURANCE"
          image="assets/img/endurance-min.jpg"
          description="Atleta ejecutando un moviento de halterofilia"
        />
        <CardTopic
          title="GIMNÁSTICOS"
          image="assets/img/gyms-min.jpg"
          description="Atleta ejecutando un moviento de halterofilia"
        />
      </ContainerList>
    </Container>
  );
}
