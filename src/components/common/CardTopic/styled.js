import styled from "styled-components";

export const ContainerImage = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const ContainerCard = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2 {
    font-size: var(--font-size-sub-titles);
    font-weight: 700;
    margin: 1rem 0;
  }
`;
