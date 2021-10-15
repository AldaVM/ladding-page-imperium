import styled from "styled-components";

export const ContainerBanner = styled.section`
  position: relative;
  width: 50%;
  top: 0;
  opacity: 1;

  @media only screen and (max-width: 870px) {
    position: ${(props) => (props.isSecond ? "absolute" : "relative")};
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    animation: slide 10s infinite;
    animation-delay: ${(props) => (props.isSecond ? "5s" : "10s")};
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  max-height: 600px;
  background-color: var(--bg-color-image);

  img {
    max-width: 100%;
    height: 100%;
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
    font-size: 1rem;
    font-weight: 700;
  }

  h3 {
    font-size: var(--font-size-banner-title);
    padding: 0.5rem 0;
    font-weight: 700;
  }

  a {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
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
