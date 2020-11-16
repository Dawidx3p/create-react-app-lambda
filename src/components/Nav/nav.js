import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return(
        <Navbar bg="light" variant="light">
              <Navbar.Brand><h2>Dawid Dębiec</h2></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav>
            </Navbar>
    )
}