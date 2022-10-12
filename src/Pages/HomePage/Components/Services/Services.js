import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ServicesCards} from './ServicesCards';
import {useNavigate} from 'react-router-dom';
import './Services.css';

function Services() {
    const navigate = useNavigate();
  return (
    <Container fluid>
    <Row className='services-row'>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}className='services-col-span'></Col>
        <Col className='services-col-container'>
            <div className="services-container-title">
                <h2 className='services-protection-heading'>What you will get with Olympus Shield</h2>
            </div>
            <Row className='services-card-row'>
                {ServicesCards.map((card,index) =>{
                    return(
                        <Col className='services-card-col' xxl={3} xl={3} lg={3} md={6} sm={12} xs={12} key={index}>
                            <div className='services-card'>
                                {/* <img src={card.src} className='services-card-img' alt={card.alt}/> */}
                                <div className='services-card-whole-content'>
                                    <h5 className='services-card-title'>{card.title}</h5>
                                    <div className='services-card-content'>
                                        <p className=" services-card-description">{card.description}</p>
                                        <a className='services-card-link' onClick={() => navigate('/services')}> {card.link} 
                                            <svg xmlns={card.xmlnx} width="16" height="16" fill={card.fill} class={card.class} viewBox={card.viewBox}>
                                            <path fill-rule={card.fillRule} d={card.path}/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </Col>
                    )
                })}
            </Row>

           
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}className='services-col-span'></Col>
    </Row>
</Container>
  )
}

export default Services