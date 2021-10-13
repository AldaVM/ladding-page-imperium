import { ContainerImage, ContainerCard } from "./styled";

export default function CardTopic({ image, description, title }) {
  return (
    <ContainerCard>
      <ContainerImage>
        <img src={image} alt={`${description} ${title}`} loading="lazy" />
      </ContainerImage>
      <h2>{title}</h2>
    </ContainerCard>
  );
}
