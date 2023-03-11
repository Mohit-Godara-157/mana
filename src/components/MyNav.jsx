import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../assets/img/svg/logo.svg';
import heartImage from '../assets/img/svg/heart.svg';
import downArrow from '../assets/img/svg/downArrow.svg';
import navToggle from '../assets/img/svg/navToggle.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav() {
    return (
        <div className='nav_bg '>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='py-3'>
                <Container className='align-items-center'>
                    <Navbar.Brand href="#home"><a href="#"><img src={logoImage} alt="logo" width={70} /></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " className='border-0' />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto ">

                        </Nav>
                        <Nav className='align-items-center'>
                            <Nav.Link className='mx-2 ff_OpenSans position-relative p-0 mx-3 navLines fw-semibold text-white fs_md' href="#deets">LEARN</Nav.Link>
                            <Nav.Link className='mx-2 ff_OpenSans position-relative p-0 mx-3 navLines fw-semibold text-white fs_md' href="#deets">LISTINGS</Nav.Link>
                            <Nav.Link className='mx-2 ff_OpenSans position-relative p-0 mx-3 navLines fw-semibold text-white fs_md' href="#deets">COMMUNITIES</Nav.Link>
                            <Nav.Link className='mx-2 ff_OpenSans position-relative p-0 mx-3 navLines fw-semibold text-white fs_md' href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className='mx-2' href="#deets"><img src={heartImage} alt="heartImage" width={20} /></Nav.Link>
                            <Nav.Link className='mx-2 ff_OpenSans position-relative p-0 mx-3 navLines fw-semibold text-white fs_md' href="#deets">$ USD <img src={downArrow} alt="downArrow" /></Nav.Link>
                            <Nav.Link className='mx-2 d-none d-lg-block' href="#deets"><img src={navToggle} alt="heartImage" /></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNav;