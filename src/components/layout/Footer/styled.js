import styled from "styled-components";

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-background);
  border-top: 1rem solid var(--red-primary);
`;

export const ContainerLogo = styled.div`
  height: 12rem;
  width: 12rem;
  padding: 1rem;

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const TitleFooter = styled.h3`
  margin-bottom: 2rem;
  font-size: var(--font-size-footer);
  font-weight: 700;
  color: #fff;
  padding: 0;
`;

export const ListUbications = styled.ul`
  padding-left: 1rem;
  li {
    margin-bottom: 1rem;
    color: #fff;
    font-size: var(--font-size-footer);
    font-weight: 700;

    span {
      display: inline-block;
      color: var(--red-primary);
      font-weight: 700;
    }
  }
`;

export const ListSocials = styled.ul`
  li {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: var(--font-size-footer);
    text-align: right;
    font-weight: 700;
    span {
      color: var(--red-primary);
      font-weight: 700;
    }
  }
`;
