import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import {
  FooterContent,
  FooterContainer,
  ContainerLogo,
  TitleFooter,
  ListUbications,
  ListSocials,
} from "./styled";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <TitleFooter>UBÍCANOS AQUÍ:</TitleFooter>
          <ListUbications>
            <li>
              EN AV.28 DE JULIO <span>#981 - CHOSICA</span>
            </li>
            <li>
              EN PARIACHI CERRO 22 <span>50 - HUAYCAN</span>
            </li>
          </ListUbications>
        </div>
        <ContainerLogo>
          <img src="assets/img/logo-imperium-cross.png" alt="Logo Imperium Cross" />
        </ContainerLogo>
        <ListSocials>
          <li>
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>{" "}
            IMPERIUM.CROSS@GMAIL.COM
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>{" "}
            SIGUENOS EN @IMPERIUMCROSS
          </li>
          <li>
            <span>CONTACTO:</span> 987 717 277 - 993 620 024 - 935 257 567
          </li>
        </ListSocials>
      </FooterContent>
    </FooterContainer>
  );
}
