import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" expand="lg" className="navbar fixed-top " > 
            <Container fluid>
                <Navbar.Brand style={{color: 'white'}} href="/">Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontSize:'18px' }}
                        navbarScroll
                    >
                        <Nav.Link style={{color: 'white',  marginLeft:'40px' }} href="/">Главное</Nav.Link>
                        <Nav.Link style={{color: 'white',  marginLeft:'40px' }} href="/allplace">Все продукты</Nav.Link>
                        <Nav.Link style={{ color: 'white', marginLeft:'40px' }} href="/recommend">Скидочные</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;