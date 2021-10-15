import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--black-background);

  img {
    max-width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;

export const MainClassFree = styled.section`
  position: relative;
  padding: 8rem 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url("assets/img/banner4-min.jpg");
    background-size: cover;
    background-position: center center;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.75;
  }
`;

export const ContainerFrom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  postion: relative;
  border: 3px solid #ffffff;
  max-width: 1100px;
  width: 80%;
  z-index: 2;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const TitleClassFree = styled.h2`
  font-size: var(--font-size-sub-titles);
  font-weight: 700;
  display: inline-block;
  max-width: 800px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;
  z-index: 2;

  span {
    color: var(--red-primary);
    font-weight: 700;
    display: inline-block;
    margin: 0px 2px;
  }
`;
