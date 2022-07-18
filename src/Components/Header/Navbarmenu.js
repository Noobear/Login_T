import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbarmenu.css';

function Navbarmenu() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand id="title" href="/"><i class="fa-solid fa-seedling" />Greener</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Greener
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">식물추천</Nav.Link>
                  <Nav.Link href="#">식물호텔</Nav.Link>
                  <NavDropdown
                    title="커뮤니티"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">식물마켓</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">소통마당</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="마이페이지"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">회원정보 조회</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">1:1 문의</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">내 식물</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">공지사항</Nav.Link>
                  <Nav.Link href="#">FAQ</Nav.Link>
                  <Nav.Link id="loginbtn" href="/login">로그인</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>            
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarmenu;