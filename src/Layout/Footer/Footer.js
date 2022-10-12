import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiOutlineCopyright } from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
import {FaWhatsapp} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer-container">
        <Row className="footer-info-row">
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col className="footer-logo-col" xxl={1} xl={1} lg={2} md={2} sm={2} xs={3}>
                <div className="footer-logo-container">

                </div>
                <div className="footer-social-container">
                    <a href='https://www.linkedin.com/company/olympusshield/' rel="noreferrer" target="_blank"><FaLinkedinIn className='footer-social-icon'/></a>
                    <a href='https://www.instagram.com/olympusshield' rel="noreferrer" target="_blank"><FaInstagram className='footer-social-icon'/></a>
                    <a href='https://www.facebook.com/Olympusshield' rel="noreferrer" target="_blank"><FaFacebookF className='footer-social-icon'/></a>
                    <a href='https://twitter.com/OlympusShield' rel="noreferrer" target="_blank"><FaTwitter className='footer-social-icon'/></a>             
                    <a href='https://www.tiktok.com/@olympusshield' rel="noreferrer" target="_blank"><FaTiktok className='footer-social-icon'/></a>             
                    <a href='https://twitter.com/OlympusShield' rel="noreferrer" target="_blank"><FaTiktok className='footer-social-icon-empty'/></a>             
                </div>
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={9}></Col>
            <Col className="footer-address-col" xxl={4} xl={4} lg={3} md={3} sm={3} xs={10}>
                <h3 className='address-heading'>Address</h3>
                <ul className='address-list'>
                    <li className='address-list-item'>
                    <a href="https://www.google.com/maps/place/God+of+Mining/@33.8849318,35.5712756,17z/data=!3m1!4b1!4m5!3m4!1s0x151f3d512e242e15:0x60f7b8024f62bf50!8m2!3d33.8849318!4d35.5712756" rel="noreferrer" target="_blank" className='address-list-link'>
                        <ImLocation2 className='address-list-icon'/>
                        bonjus Street, Fanar, El-Metn, Lebanon
                    </a>
                    </li> 
                </ul>
            </Col>
            <Col id="contact-us" className="footer-contact-col" xxl={4} xl={4} lg={4} md={4} sm={4} xs={10}>
            <h3 className='address-heading'>Contact Us</h3>
                <ul className='address-list'>
                    <li className='address-list-item'>
                        <a href="mailto: secureit@olympusshield.com" className='address-list-link'>
                            <MdEmail className='address-list-icon'/>
                            secureit@olympusshield.com
                        </a>
                    </li>
                    <li className='address-list-item'>
                        <a  href='https://wa.me/+96176361951' rel="noreferrer"
                         target='_blank' className='address-list-link'>
                            <FaWhatsapp className='address-list-icon'/>
                            Chat With Us 24/7
                        </a>      
                    </li> 
                </ul>

            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className='footer-policy-row'>
            <Col className='footer-bottom-col-span' xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col className='designer-sign' xxl={3} xl={3} lg={4} md={10} sm={10} xs={12} >
                <AiOutlineCopyright className='designer-icon'/>
                <h5 className='designer-sign-heading'>2022 Olympus Shield. Designed By <a className='designer-link' href='https://egety.com/'><span className='designer-sign-span'>EGETY</span></a></h5>
            </Col>

            <Col className='footer-bottom-col-middle-span' xxl={3} xl={3} lg={3} md={3} sm={2} xs={2} ></Col>
            <Col className='privacy-policy' xxl={2} xl={2} lg={2} md={2} sm={5} xs={5}>
                {/* <a>
                    Privacy Policy
                </a> */}
            </Col>
            <Col className='terms-conditions' xxl={2} xl={2} lg={2} md={2} sm={5} xs={5}>
                {/* <a>
                    Terms & Conditions
                </a> */}
            </Col>
            <Col className='footer-bottom-col-span' xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>    
    </Container>
  )
}

export default Footer