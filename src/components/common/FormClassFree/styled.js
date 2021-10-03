import styled from "styled-components";

export const ContainerForm = styled.section`
  width: 48%;
  color: #fff;
  font-size: 1rem;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  input {
    background: transparent;
    border: 2px solid #a4161a;
    padding: 0.3em;
    border-radius: 0;
    color: #fff;
  }
`;

export const ButtonForm = styled.button`
  background: #a4161a;
  border: none;
  color: #ffffff;
  padding: 0.5em 2.5em;
  border-radius: 0;
  align-self: flex-end;
`;
