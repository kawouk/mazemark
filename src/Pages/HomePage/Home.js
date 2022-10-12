import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import Features from './Components/Features/features';
import Protection from './Components/OlympusProtection/Protection';
import Trust from './Components/TrustBanner/Trust';
import Services from './Components/Services/Services';
import Footer from '../../Layout/Footer/Footer';
import Customers from './Components/Customers/Customers';
import './Home.css'

function Home() {
  return (
    <Container fluid  className="olympus-home-container">
            <Row className="header-row">
        <Header />
      </Row>
      <Row className="banner-row">
        <HomeBanner />
      </Row>
      <Row className="home-features-row">
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col className='home-features-col'>
          <Features/>
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
      </Row>
      <Row className="home-protection-row">
        <Protection />
      </Row>
      <Row className="home-trust-row">
        <Trust />
      </Row>
      <Row className="home-services-row">
        <Services />
      </Row>
      <Row className="home-features-row">
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col className='home-features-col'>
          <Customers />
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
      </Row>
      <Row className="footer-row">
        <Footer />
      </Row>
      
    </Container>
  )
}

export default Home