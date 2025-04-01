import { useLocation } from "react-router-dom";
import { Container, Logo, Nav, NavItem } from "./styled";

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <Logo>CERTICOS BOOKS</Logo>
      <Nav>
        <NavItem href="search" $active={location.pathname === "/book/search"}>
          도서 검색
        </NavItem>
        <NavItem href="like" $active={location.pathname === "/book/like"}>
          내가 찜한 책
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Header;
