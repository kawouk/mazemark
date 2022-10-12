import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TiMediaPlayOutline} from 'react-icons/ti';
import './ServicesBanner.css';

function ServicesBanner() {
  return (
    <Container fluid className="services-container">
        <Row className="services-row">
            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Social Media Management</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Community Building</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Customer Relationship Management</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
        </Row>
        <Row className="services-row2">
            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Marketing Strategies</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Ads Booting</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12} className="service-type-col">
            <div className='services-type-container'>
              <TiMediaPlayOutline className='services-type-icon' />
              <h1 className='services-type-heading'>Social Media Followers Boosting</h1>
              <p className='services-type-description'>We are Your Social Media Buddy! We work on your advertising campaigns, marketing plans & enhance your online presence! We take care of your websites & boost your SEO, create your mobile Apps & write your blogs!</p>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ServicesBanner