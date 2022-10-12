import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vision from './Components/Vision/Vision';

function AboutVision({setShow, setColor}) {
  setColor(true);
  return (
    <Container fluid className="about-vision-container">
        <Row className="about-vision-comp-row" onClick={()=> setShow(true)}>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            <Vision />
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
    </Container>
  )
}

export default AboutVision