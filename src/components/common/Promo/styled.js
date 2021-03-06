import styled from "styled-components";

export const ContainerPromo = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #a4161a;
    font-weight: 700;
    font-size: var(--font-size-sub-titles);
  }

  p {
    display: inline-block;
    font-size: var(--font-size-sub-titles);
    padding: 0.3rem 0;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
  }
`;

export const SupayRight = styled.div`
  position: absolute;
  display: block;
  width: 340px;
  top: 4rem;
  right: 0;

  img {
    width: 100%;
    vertical-align: top;
  }

  @media only screen and (max-width: 1350px) {
    width: 300px;
  }

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

export const SectionPromo = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--black-background);
  padding-top: 6rem;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
`;

export const TitlePromo = styled.h1`
  font-size: var(--font-size-pricipal-titles);
  font-weight: 700;
  line-height: 1;
  padding: 1rem 0;
  text-align: center;
  color: #ffffff;
`;
