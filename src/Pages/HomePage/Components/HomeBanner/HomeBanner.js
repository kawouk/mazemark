import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeBanner.css'

function HomeBanner() {
  const closeSideBar = () => {
    document.getElementById('sideBtnContainer').style.transform = "translateX(100%)"
    console.log('Home')
  }
  return (
    <Container fluid className="home-banner-container" onClick={() => closeSideBar() }>
        <Row className="home-banner-title-row" >
            <h1 className="home-banner-title">Welcome to MAZE MARK</h1>
            <span className="home-banner-title-span">The Digital Marketing Agency That Will Bring Your Bussiness To The Digital World  </span>
            <Row className="home-banner-desktop-row">
              <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
              <Col className="home-banner-desktop-col" xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>  
                <div className="home-banner-laptop-container"></div>       
                <div className="home-banner-desktop-container"></div>       
                <div className="home-banner-tablet-container"></div>       
                <div className="home-banner-phone-container"></div>       
              </Col>
              <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            </Row>
        </Row>
    </Container>
  )
}

export default HomeBanner