import {
  ContainerImage,
  ContainerBanner,
  ContentBanner,
  TextBanner,
  ContentTextBanner,
} from "./styled";

export default function Banner({ title, description, message, link, image }) {
  return (
    <ContainerBanner>
      <ContainerImage>
        <img src={image} alt={`${description} ${title}`} loading="lazy" />
      </ContainerImage>
      <ContentBanner />
      <TextBanner>
        <ContentTextBanner>
          <span>{description}</span>
          <h3>{title}</h3>
          <a href={link}>{message}</a>
        </ContentTextBanner>
      </TextBanner>
    </ContainerBanner>
  );
}
