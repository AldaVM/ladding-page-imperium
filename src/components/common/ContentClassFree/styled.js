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
`;

export const ListClassFree = styled.ul`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  li {
    padding: 0.5rem 0;
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

export const TitleForm = styled.h3`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
  color: #ffffff;

  span {
    color: var(--red-primary);
    font-weight: 700;
  }
`;
