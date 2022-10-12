import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {useNavigate} from 'react-router-dom';
import './Vision.css';
 

function Vision() {
  // const navigate = useNavigate();
  return (
    <Container fluid className='vision-container'>
      <Row className='vision-row'>
      <Col  sm={6} xs={12} className='vision-col-text'>
          <div className='vision-container-content'>
            <h1 className='vision-heading' >OUR <span>VISION</span></h1>
            <p className='vision-text'>
            We are an operating digital media strategy agency located in Beirut that helps business owners in Lebanon and the Middle East expand through social media and digital marketing.
            Better’fly is a free platform for creative minds & individuals. Whether you have a business to run an event, or any project to brainstorm and bring to life, just buzz us!
            </p>
            {/* <div className='vision-services-btn' onClick={() => navigate('/services')} >
            OUR SERVICES
            </div> */}
          </div>
        </Col>
        <Col  sm={6} xs={12} className='vision-col-img'>
          <img src="https://iaterial.sirv.com/egety-maze-mark/Best-Marketing-Conferences-and-Events-to-Attend-removebg-preview.png" alt="" />  
        </Col>

      </Row>
    </Container>
  )
}

export default Vision