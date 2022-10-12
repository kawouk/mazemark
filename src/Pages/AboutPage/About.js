import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import PageBanner from '../../Layout/PageBanner/PageBanner';
import AboutTabs from './Components/AboutTabs/AboutTabs';
import AboutProtect from './Components/AboutProtect/AboutProtect';
import Testimonial from './Components/Testimonial/Testimonial';

function About() {

  return (
    <Container fluid className="about-page-container">
        <Row className="header-row">
            <Header />
        </Row>
        <Row className="page-banner-row">
            <PageBanner title="About Us" />
        </Row>
        <Row className="about-tabs-row">
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col>
                <AboutTabs />
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="testimonial-row">
            <Testimonial />
        </Row>
        <Row className="about-tabs-row">
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col>
                <AboutProtect />
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="footer-row">
            <Footer />
        </Row>
    </Container>
  )
}

export default About