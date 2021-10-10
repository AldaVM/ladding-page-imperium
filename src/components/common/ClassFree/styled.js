import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const ContrasterConteiner = styled.div`
  position: absolute;
  background-color: var(--black-background);
  opacity: 0.85;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--black-background);
  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const MainClassFree = styled.section`
  padding-bottom: 3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerFrom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  postion: relative;
  border: 3px solid #ffffff;
  max-width: 1100px;
`;

export const TitleClassFree = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  display: inline-block;
  max-width: 800px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;

  span {
    color: var(--red-primary);
    font-weight: 700;
    display: inline-block;
    margin: 0px 2px;
  }
`;
