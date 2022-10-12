import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Conatiner from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import "./Header.css";
import { NavDropdown } from "react-bootstrap";

function Header({show,setShow,color,setColor}) {
  const navigate = useNavigate();
  const changeColor = () =>{
    if(window.scrollY>=10){
      setColor(true)
    }else{
      setColor(false)
    }
  };
  
  window.addEventListener("scroll", changeColor);
  console.log(show);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="i-navBar" className={color ? "nav-bar-bg" : ""} fixed="top">
        <Conatiner fluid className="i-nav-container">
          <Navbar.Brand className="i-nav-brand" onClick={() => navigate("/")}>
            <img
              src="https://iaterial.sirv.com/egety-maze-mark/LOGO-Mazemark-3.png"
              alt=""
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="i-nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="nav-item home-nav-link" onClick={() => navigate("/")}>
                HOME
              </Nav.Link>
              <NavDropdown title="ABOUT" className="nav-item"  >
                <NavDropdown.Item 
                  className="nav-sub-item"
                  onClick={() => navigate("/about/vision")}
                >
                      OUR VISION
                </NavDropdown.Item>
                <NavDropdown.Item 
                  className="nav-sub-item"
                  onClick={() => navigate("/")}
                >
                      OUR TEAM
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="nav-item"
                id="services-nav-link"
                onClick={() => navigate("/services")}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link className="nav-item" onClick={() => navigate("/")}>
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className="nav-item contact-nav-link" onClick={() => navigate("/contact")}>
                CONTACT 
              </Nav.Link>
              <Nav.Link className="sidebar-nav-item">
                <BsList
                  id="sideBtn"
                  className="nav-btn"
                  onClick={() => setShow(!show)}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Conatiner>
      </Navbar>
      <Container id="sideBtnContainer" fluid className="i-side-bar" style={{ display:show ? 'none' : 'block'}}>
        <Row className="side-bar-header-row">
          <AiOutlineClose
            className="side-bar-close-btn"
            onClick={() => setShow(!show)}
          />
        </Row>
        <Row className="side-bar-heading-row"  >
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-heading-col">
            <h1> Information</h1>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-text-row">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-text-col">
            <p className="side-bar-text-paragraph">
              The Digital Marketing Agency That Will Bring Your Bussiness To The Digital World
            </p>
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-slide-row">
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
          <Col className="side-bar-slide-col" xs={10}>
          <img src="https://iaterial.sirv.com/egety-maze-mark/LOGO--color-cut.png"  alt="" />
          </Col>
          <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-bar-social-row">
          <Col xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}></Col>
          <Col className="socail-col">
            <div className="social-container">
              <a href="sd" rel="noreferrer" target="_blank" className="side-social-btn">
                <FaInstagram className="side-social-icon" />
              </a>
              <a href="sd" rel="noreferrer" target="_blank" className="side-social-btn">
                <FaTwitter className="side-social-icon" />
              </a>
              <a href="sd" rel="noreferrer" target="_blank" className="side-social-btn">
                <FaFacebookF className="side-social-icon" />
              </a>
              <a href="sd" rel="noreferrer" target="_blank" className="side-social-btn">
                <FaLinkedinIn className="side-social-icon" />
              </a>
            </div>
          </Col>
          <Col xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}></Col>
        </Row>
        <Row className="side-designer-sign">
       
          <Col  xs={12} className="designer-sign-col">
            <p className="side-designer-paragraph">
              <BiCopyright className="side-social-icon" />
              2022 Maze Mark. Designed By{" "}
              <a
                href="_targethttps://egety.com/"
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
    </>
  );
}

export default Header;
