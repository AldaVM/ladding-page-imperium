import styled from "styled-components";

export const ContainerLogo = styled.div`
  max-width: 250px;
  padding: 0;

  img {
    max-width: 100%;
    vertical-align: top;
  }

  @media only screen and (max-width: 500px) {
    max-width: 150px;
  }
`;
