import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaServer} from 'react-icons/fa'
import './AboutProtect.css';

function AboutProtect() {
  return (
    <Container fluid className="about-protect-container">
        <Row className="about-protect-row">
        <Col className="about-protect-col-content" >
                <Row className="about-protect-content-row">
                    <Col className="about-protect-col-img" xxl={6} xl={6} lg={12} md={12}>
                        <img src="https://iaterial.sirv.com/Olympus/closed-padlock-digital-background-red-cyber-security_42077-4541.jpg" width="90%" height="100%" alt="" />
                    </Col>
                    <Col className="about-protect-col-content" xxl={6} xl={6} lg={12} md={12}>
                        {/* <h6 className='tabs-heading-about'>Cybersecurity Protect</h6> */}
                        <h2 className='tabs-heading-description'>Protect your website, web server, and web application from hackers.</h2>
                        <div className="about-protect-card-khara">
                            <Row className='about-protect-card-row1'>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='about-protect-card-col1 dark'>
                                    <div className="about-protect-card-container1">
                                        <FaServer className='about-protect-card-icon'/>
                                        <h3 className='about-protect-card-heading'>Database Security</h3>
                                        <p className="about-protect-card-description">Databases are prone to many sorts of injection attacks, we protect you from all of them. </p>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='about-protect-card-col2 light'>
                                    <div className="about-protect-card-container2">
                                        <FaServer className='about-protect-card-icon'/>
                                        <h3 className='about-protect-card-heading'>Web Security</h3>
                                        <p className="about-protect-card-description">Penetration test for your whole online presence, all IPs, all domains and subdomains.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='about-protect-card-row2'>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='about-protect-card-col1 light'>
                                    <div className="about-protect-card-container1">
                                        <FaServer className='about-protect-card-icon'/>
                                        <h3 className='about-protect-card-heading'>Server Security</h3>
                                        <p className="about-protect-card-description">Prevent and detect active exploitations of your internal network.</p>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} className='about-protect-card-col2 dark'>
                                    <div className="about-protect-card-container2">
                                        <FaServer className='about-protect-card-icon'/>
                                        <h3 className='about-protect-card-heading'>Internal Security</h3>
                                        <p className="about-protect-card-description">Prevent and detect active exploitations of your internal network.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutProtect