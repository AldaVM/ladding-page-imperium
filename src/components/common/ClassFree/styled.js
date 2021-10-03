import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const ContrasterConteiner = styled.div`
  position: absolute;
  background-color: #0b090a;
  opacity: 0.8;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const MainClassFree = styled.section`
  padding: 3rem 0;
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
  border: 2px solid #ffffff;
  max-width: 900px;
`;

export const TitleClassFree = styled.h2`
  font-size: 2rem;
  display: inline-block;
  max-width: 600px;
  text-align: center;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 2rem;

  span {
    color: #a4161a;
    font-weight: 700;
    display: inline-block;
    padding: 0px 1px;
  }
`;
