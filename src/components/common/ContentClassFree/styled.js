import styled from "styled-components";

export const ContainerTextClassFree = styled.div`
  width: 48%;
  position: relative;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    color: #ffffff;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ListClassFree = styled.ul`
  color: #fff;

  font-weight: 700;
  text-align: center;

  li {
    padding: 0.5rem 0;
    font-size: var(--font-size-free-item);
  }

  li::before {
    content: ".";
    color: var(--red-primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const TitleForm = styled.h2`
  font-size: var(--font-size-free-title);
  font-weight: 700;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
  color: #ffffff;

  span {
    font-size: var(--font-size-free-title);
    color: var(--red-primary);
    font-weight: 700;
  }
`;
