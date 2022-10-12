import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import PageBanner from '../../Layout/PageBanner/PageBanner';
import Plans from './Components/plans/Plans';

function Pricing() {
  return (
    <Container fluid className="pricing-container">
      <Row className="header-row">
        <Header/>
      </Row>
      <Row className="page-banner-row">
        <PageBanner title='Pricing' />
      </Row>
      <Row className="plans-row">
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
          <Plans />
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
      </Row>
      <Row className="footer-row">
        <Footer/>
      </Row>
    </Container>
  )
}

export default Pricing