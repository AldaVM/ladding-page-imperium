import { ListNavbar, ItemNavbar } from "./styled";

export default function Navbar() {
  return (
    <nav>
      <ListNavbar>
        <ItemNavbar borderLeft="1px">¿QUÉ ES EL CROSSFIT?</ItemNavbar>
        <ItemNavbar borderLeft="1px">PRUEBA UNA CLASE</ItemNavbar>
        <ItemNavbar borderLeft="1px">HORARIO</ItemNavbar>
        <ItemNavbar borderLeft="1px">TARIFA</ItemNavbar>
        <ItemNavbar borderLeft="1px" borderRight="1px">CONTACTO</ItemNavbar>
      </ListNavbar>
    </nav>
  );
}
