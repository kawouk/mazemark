import React from 'react';
import Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Approaches } from './Approaches';
import './AboutTabs.css'

function AboutTabs() {
  return (
    <Container fluid className="about-tabs-container">
        <Row className="about-tabs-row">
            <Col className="about-tabs-img-col" xxl={6}   xl={12} lg={12} md={12} sm={12} xs={12}>
                <img src="https://iaterial.sirv.com/Olympus/finger-print-network-cyber-security-background_42077-4437.jpg" width="90%" height="100%" alt="" />
            </Col>
            <Col className="about-tabs-content-col" xxl={6}  xl={12} lg={12} md={12} sm={12} xs={12}>
                {/* <h6 className='tabs-heading-about'>About Us</h6> */}
                <h2 className='tabs-heading-description'>Olympus Shield Was Created For The Sole Purpose Of Enhancing Cyber Security Wherever Needed, Because We Do It For The Love Of It.</h2>
                <Tabs className='tabs-section'>
                    <Tab eventKey="home" title="Remote" className='experience-tab'>
                        <p className='tab-content-paragraph'>
                            We Provide All Types Of Offensive Penetration Tests For Remote Clients, Be It Web/Mobile Application Layer (Layer7), Network Layer (Layer4), And Operating System Layer.
                        </p>
                    </Tab>
                    <Tab eventKey="profile" title="Local" className='why-tab'>
                        <p className='tab-content-paragraph'>
                            We Provide All Types Of Local Network Penetration Tests, Going From Port Scan All The Way To Exploitations And Authentication Bypass.
                        </p>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Special Services" className='approuch-tab'>
                        <p className='tab-content-paragraph'>
                            Everthing That Goes Under The Name Of Offensive Security, So Long As It Is Legal And Harmless, Completely Confidential And Professional.
                        </p>
                    </Tab>
                </Tabs>
                <Row className='approuch-content'> 
                    {Approaches.map((card,index)=>{
                        return (
                            <Col key={index} className='approuch-card' xxl={5} xl={5} lg={5} md={5} sm={10} xs={10}>
                                <div>
                                <div className='approuch-card-content'>
                                    <h3 className='approuch-card-title'>{card.title}</h3>
                                    <p className='approuch-card-paragraph'>{card.description}</p>
                                </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutTabs