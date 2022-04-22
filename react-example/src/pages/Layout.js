import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


const Layout = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 <Outlet />
    </>
  )
};

export default Layout;