import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeBanner.css';

function HomeBanner() {
  return (
    <Container fluid className="olympus-home-banner-container">
        <Row className="olympus-home-banner-row" xxl={12}>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col xxl={5} xl={5} lg={5} md={7} sm={7} xs={8} className="olympus-home-banner-content-col">
                <h1 className="olympus-home-banner-heading">Multi-Certified For The Most Advanced Offensive Cyber Security.</h1>
                {/* <a href='#contact-us'><button className="olympus-home-banner-btn" onClick={'#contact-us'}  >CONTACT US</button></a> */}
            </Col>
            <Col xxl={5} className="olympus-home-banner-span-col"></Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
    </Container>
  )
}

export default HomeBanner