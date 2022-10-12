import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import "./ContactUs.css";


function ContactUs({ setColor,setShow }) {
  setColor(true);


  return (
    <Container fluid className="contact-us-container">
      <Row className="contact-us-row" onClick= {() => setShow(true)}>
        <Col xs={1}></Col>
        <Col className="contact-us-col" md={5}>
          <div className="contact-us-left-container">
            <img
              src="https://iaterial.sirv.com/egety-maze-mark/LOGO--color.png"
              width="500"
              height="500"
              alt=""
              className="logo-img"
            />
            <div className="contact-links-container">
              <h6 className="contact-us-heading-loc">Beirut Office</h6>
              <a
                className="location-link"
                href="https://www.google.com/maps/place/God+of+Mining/@33.8849318,35.5712756,17z/data=!3m1!4b1!4m5!3m4!1s0x151f3d512e242e15:0x60f7b8024f62bf50!8m2!3d33.8849318!4d35.5712756"
                target="_blank"
              >
                bonjus Street, Fanar, El-Metn, Lebanon
              </a>
              <a
                className="location-link"
                href="https://wa.me/+96181108243"
                target="_blank"
              >
                +961 81 108 243
              </a>
              <a
                className="location-link"
                href="mailto: info@egety.com"
                target="_blank"
              >
                info@mazemark.com
              </a>
              <NavLink className="location-link" to="/">
                www.mazemark.com
              </NavLink>
            </div>
          </div>
        </Col>
        <Col className="contact-us-coll" md={5}>
          <div className="contact-us-right-container">
            <form className="contact-us-form" method="">
            <input type="text" className="form-control1 name" placeholder="FULL Name"/>
            <input type="text" className="form-control1 email" placeholder="Email Address"/>
            <input type="text" className="form-control1 phone" placeholder="Phone Number "/>
            <textarea className="form-control-message" placeholder="Write A Message ..."></textarea>
            <input type='submit' className="form-control-btn" value="SEND"/>
            </form>    
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row className="contact-us-map-row" onClick= {() => setShow(true)}>
        <Col xs={1}></Col>
        <Col xs={10} className="contact-us-map-col" >

        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
