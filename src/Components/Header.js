import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import images1 from '../Assets/Logo/header-logo.png';
import videoSource from '../Assets/Images/Videos/5 Star Rating.mp4';
import ReactPlayer from 'react-player'
import { useAuth } from './Protected';


  

function Header() {
 
  return (
    <>
    <div className='sticky-header'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={images1} alt="" width={50} height={50}/>
        
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/ReviewForm">Post Review</Nav.Link>
            
            <Nav.Link href="/ReviewList">
              Latest Reviews
            </Nav.Link>
            <Nav.Link href="/JoinNow">
              Join Now
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default Header;