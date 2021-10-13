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
  background-color: var(--black-background);
  opacity: 0.4;
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
`;

export const ContentTextBanner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2.5em;
  color: #ffffff;
  letter-spacing: 1px;

  span {
    display: inline-block;
    margin-left: 4px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  h3 {
    font-size: var(--font-size-sub-titles);
    padding: 0.5rem 0;
    font-weight: 700;
  }

  a {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 1rem 2rem;
    align-self: flex-end;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    ::before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 6px;
      padding: 1rem;
      width: 100%;
      background-color: transparent;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
    }
    :hover {
      color: var(--red-primary);
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
