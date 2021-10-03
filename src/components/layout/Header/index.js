import Navbar from "../../common/Navbar";
import ImgNavbar from "../../common/ImgNavbar";
import { ContainerHeader, Header } from "./styled";

export default function HeaderPage() {
  return (
    <Header>
      <ContainerHeader>
        <ImgNavbar />
        <Navbar />
      </ContainerHeader>
    </Header>
  );
}
