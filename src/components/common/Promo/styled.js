import styled from "styled-components";

export const ContainerPromo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #a4161a;
    font-weight: 700;
  }

  p {
    display: inline-block;
    font-size: 1.1em;
    color: #ffffff;
    text-align: center;
  }
`;

export const SectionPromo = styled.section`
  background-color: #0b090a;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
`;

export const TitlePromo = styled.h1`
  font-size: 3.2rem;
  line-height: 1;
  margin-bottom: 5px;
  text-align: center;
  color: #ffffff;
`;
