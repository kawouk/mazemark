import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row className="footer-content-row">
        <Col className="footer-logo-col" xxl={1} xl={2} lg={2}  md={2} sm={4} xs={4}>
          <img src="https://iaterial.sirv.com/egety-maze-mark/LOGO-Mazemark-3.png"  alt="" />
        </Col>
      
        <Col className="footer-address-col" xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className="address-container">
            <h5 className="address-heading">ADDRESS</h5>
            <a
              className="location-link"
              href="https://www.google.com/maps/place/God+of+Mining/@33.8849318,35.5712756,17z/data=!3m1!4b1!4m5!3m4!1s0x151f3d512e242e15:0x60f7b8024f62bf50!8m2!3d33.8849318!4d35.5712756"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineLocationMarker className="location-icon big-icon" />
              Bonjus Street, Fanar, El-Metn, Lebanon
            </a>
          </div>
        </Col>
        
        <Col className="footer-contact-col" xxl={7} xl={6} lg={6} md={6} sm={12} xs={12}>
          <div className="address-container">
            <h5 className="address-heading left">CONTACT US</h5>
            <div className="row-display-container">
              <div className="footer-contact-container">
                <a
                  className="location-link"
                  href="mailto: info@egety.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiOutlineMail className="location-icon mail-icon" />
                  info@mazemark.com
                </a>
                <a
                  className="location-link"
                  href="https://wa.me/+96181108243"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp className="location-icon" />
                  Chat with us
                </a>
              </div>

              <div className="footer-social-container">
                <a href="#" rel="noreferrer" target="_blank" className="side-social-btn footer-social-icon">
                  <FaInstagram className="side-social-icon" />
                </a>
                <a href="#" rel="noreferrer" target="_blank" className="side-social-btn footer-social-icon">
                  <FaTwitter className="side-social-icon" />
                </a>
                <a href="#" rel="noreferrer" target="_blank" className="side-social-btn footer-social-icon">
                  <FaFacebookF className="side-social-icon" />
                </a>
                <a href="#" rel="noreferrer" target="_blank" className="side-social-btn footer-social-icon">
                  <FaLinkedinIn className="side-social-icon" />
                </a>
              </div>
   
            </div>
          </div>
        </Col>
      </Row>
      <Row className="footer-designer-sign">

        <Col xs={12}>
          <p className="side-designer-paragraph">
            <BiCopyright className="side-social-icon" />
            2022 Maze Mark. Designed By{" "}
            <a
              href="https://egety.com/"
              target="_blank"
              className="egety-signiture"
              rel="noreferrer"
            >
              EGETY
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
