import styled from "styled-components";

export const ContainerBanner = styled.section`
  position: relative;
  width: 50%;
`;

export const ContainerImage = styled.div`
  width: 100%;

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const ContentBanner = styled.div`
  position: absolute;
  background-color: #0b090a;
  opacity: 0.7;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const TextBanner = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: #ffffff;
`;

export const ContentTextBanner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2.5em;
  color: #ffffff;
  letter-spacing: 1px;

  span {
    display: inline-block;
    margin-bottom: 3px;
    margin-left: 2px;
    font-size: 0.7rem;
    line-height: 1;
  }

  h3 {
    margin-bottom: 3px;
    font-size: 2rem;
    padding: 0;
    line-height: 1;
  }

  a {
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.6em;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
    align-self: flex-end;
  }
`;
