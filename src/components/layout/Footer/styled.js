import styled from "styled-components";

export const FooterContent = styled.div`
  max-width: 1400px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 0;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b090a;
  border-top: 1rem solid #a4161a;
  color: #fff;
`;

export const ContainerLogo = styled.div`
  height: 6rem;
  width: 6rem;

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export const TitleFooter = styled.h3`
  margin-bottom: 1rem;
  font-size: 2rem;
  padding: 0;
  line-height: 1;
`;

export const ListUbications = styled.ul`
  li {
    padding-left: 4rem;
    margin-bottom: 0.5rem;
    span {
      color: #a4161a;
      font-weight: 700;
    }
  }
`;

export const ListSocials = styled.ul`
  li {
    margin-bottom: 0.5rem;
    text-align: right;
    span {
      color: #a4161a;
      font-weight: 700;
    }
  }
`;
