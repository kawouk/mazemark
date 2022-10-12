import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Plans.css'

function Plans() {
  return (
    <Container fluid className='plans-container'>
      <h1 className='plan-heading'>How We Make Our Approach</h1>
   
        <Row className='plan-row'>
          <Col className='basic-plan-col' xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} >
          <div className='basic-sub-container'>
            <h5 className='plan-title'>Basic Security Assessment</h5>
            <h3 className='plan-cost'>Free</h3>
            <p className='basic-plan-description'>Before We Sign A Full Penetration Test Contract, We Provide You, Upon Your Consent, With a Free POC Of Your Vulnerabilities, So You Know What You Are Paying For</p>
          </div>
          </Col>
          <Col className='advanced-plan-col' xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} >
          <div className='advanced-sub-container'>
            <h5 className='plan-title'>Advanced Penetration Test</h5>
            <h3 className='plan-cost'>$1,500 - $25,000</h3>
            <p className='plan-description'>Depending On The Client's Needs, Prices Are To Be Discussed Based On The Time And Effort Needed To Complete The Job</p>
          </div> 
          </Col>
          <Col className='special-plan-col' xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} >
            <div className='special-sub-container'>
              <h5 className='plan-title'>Special Services</h5>
              <h3 className='plan-cost'>$10,000 - $150,000</h3>
              <p className='plan-description'>Everything That Goes Under The Offensive Security Title, So Long As It Is Legal. Only Available For Client's With Special Needs</p>
            </div>
          </Col>
        </Row>


    </Container>
  )
}

export default Plans