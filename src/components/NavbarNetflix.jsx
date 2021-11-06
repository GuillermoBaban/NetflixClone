import { Navbar, Container, Nav } from "react-bootstrap";

export const NavbarNetflix = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="font-link fixed-top"
    >
      <Container className="m-0 justify-content-start">
        <Navbar.Brand href="#home">NetFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>New & Popular</Nav.Link>
            <Nav.Link>My List</Nav.Link>
            <Nav.Link>Watch Again</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
