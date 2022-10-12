import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesBanner from './Components/ServicesBanner/ServicesBanner';

function Services({setShow,setColor}) {
  setColor(true);
  return (
    <Container fluid className="services-container">
        <Row className="services-banner-row" onClick={()=> setShow(true)}>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col xxl={10}><ServicesBanner/></Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="services-footer-row">
            
        </Row>
    </Container>
  )
}

export default Services