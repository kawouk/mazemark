import React from 'react'
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PageBanner.css';
import { BiHome } from 'react-icons/bi';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom';

function PageBanner(props) {
    const navigate = useNavigate();
    const title = props.title;

  return (
    <Container fluid className="page-banner-container">
        <Row className="page-banner-row">
            <Col className='page-banner-col-span' xxl={1}></Col>
            <Col className='page-banner-col-title' xxl={10}>
                <h2 className='page-banner-heading'>
                    {title}
                </h2>
                <Nav className='page-banner-nav '>
                    <Nav.Item href='/' className='page-banner-nav-item'>
                        <div className='page-banner-home-content'>
                            <BiHome className='home-icon'/>
                            <span className='page-banner-icon-span'> </span>
                            <h6 onClick={() => navigate('/')} className='page-banner-home-heading'>Home</h6>
                            <span className='page-banner-home-span'></span> 
                        </div>
                    </Nav.Item>
                    <Nav.Item  className='page-banner-nav-item'>
                        <h6 className='page-banner-about-heading'>/<span className='page-banner-about-span'>1</span>{title}</h6>
                    </Nav.Item>
                </Nav>

            </Col>
            <Col className='page-banner-col-span' xxl={1}></Col>

        </Row>
    </Container>
  )
}

export default PageBanner