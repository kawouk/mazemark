import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IoMdQuote} from 'react-icons/io';
import {RiStarSFill} from 'react-icons/ri';
import './Testimonial.css';
import {useNavigate} from 'react-router';

function Testimonial() {
    const navigate = useNavigate();
  return (
<Container fluid className='customer-review-container'>
    <Row className='customer-review-row'>
        <Col className='customer-review-col-span' xxl={3} xl={3} lg={1} md={1} sm={1} xs={1}></Col>
        <Col className='customer-review-col-content' >
            <h2 className='customer-review-heading'>MVP Customer Comment:</h2>
            <div className='customer-review-description-container'>
                <IoMdQuote className='quotes-icon'/>
                <p className='customer-review-description'>
                “Olympus Shield Investigated Our Case and Solved It When No One Else Succeeded For Almost a Year and a Half."
                </p>
                <div>
                    <RiStarSFill className='star-review-icon' />
                    <RiStarSFill className='star-review-icon' />
                    <RiStarSFill className='star-review-icon' />
                    <RiStarSFill className='star-review-icon' />
                    <RiStarSFill className='star-review-icon' />
                </div>
                <h3 className='customer-name-heading'>Name Censored.</h3>
                <span className='customer-position-heading'>Multi-National Business Owner.</span> 
                <br/>
                <a onClick={() => navigate('/')} href='#customers-section'>
                <button className='customer-review-btn'>See More</button> 
                </a>
                                
            </div>
        </Col>
        <Col className='customer-review-col-span' xxl={3} xl={3} lg={1} md={1} sm={1} xs={1}></Col>
    </Row>
</Container>
  )
}

export default Testimonial