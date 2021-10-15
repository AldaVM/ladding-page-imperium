import styled from "styled-components";

export const ContainerDobleBanner = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  @media only screen and (max-width: 870px) {
    flex-direction: column;
  }
`;
