import styled from "styled-components";

export const ContainerForm = styled.section`
  width: 47%;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    padding-bottom: 0.5rem;
  }

  input {
    background: transparent;
    border: 2px solid var(--red-primary);
    padding: 1rem;
    border-radius: 0;
    color: #fff;
    font-size: 1rem;
  }
`;

export const ErrorMessageForm = styled.span`
  display: inline-block;
  padding: 5px 0;
  color: var(--red-primary);
  font-size: 0.8rem;
`;

export const ButtonForm = styled.button`
  background-color: var(--red-primary);
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 3rem;
  border-radius: 0;
  align-self: flex-end;
  cursor: pointer;
`;
