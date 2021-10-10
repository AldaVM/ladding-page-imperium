import styled from "styled-components";

export const ListNavbar = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

export const ItemNavbar = styled.li`
  display: inline-block;
  text-align: center;
  width: 13rem;
  border-bottom: 1px;
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : "0")};
  border-right: ${(props) => (props.borderRight ? props.borderRight : "0")};
  border-top: 0;
  border-style: solid;
  border-color: #fff;
  padding: 2rem 0;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9em;
  transition: color 0.5s ease-in-out;

  :hover {
    color: var(--red-primary);
  }

  @media only screen and (max-width: 1400px) {
    width: 10rem;
    font-size: 0.8em;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
