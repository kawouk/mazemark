import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router';
import "./header.css"

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className='olympus-nav-bar' bg="black" variant="dark" fixed='top' >
      <Container fluid className="olympus-header-container">
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Navbar.Brand href="#home">
                <div className="olympus-nav-brand">
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='collapse-nav' />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className='me-auto'>
                    <Nav.Link className='olympus-home-nav-link' onClick={() => navigate('/')} >HOME</Nav.Link>
                    <Nav.Link className='olympus-services-nav-link' onClick={() => navigate('/services')}>SERVICES</Nav.Link>
                    <Nav.Link className='olympus-customers-nav-link' onClick={() => navigate('/')} href="#customers-section">CUSTOMERS</Nav.Link>
                    <Nav.Link className='olympus-pricing-nav-link' onClick={() => navigate('/pricing')}>PRICING</Nav.Link>
                    <Nav.Link className='olympus-about-nav-link' onClick={() => navigate('/about')}>ABOUT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
      </Container>
    </Navbar>
   
 )
}

export default Header