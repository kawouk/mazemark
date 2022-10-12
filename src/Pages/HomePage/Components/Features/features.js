import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import './features.css'
import { FeaturesCards } from './FeaturesCards';

function Features() {
  return (
    <Container fluid className="olympus-features-container">
        <Row className="olympus-features-row">
            {FeaturesCards.map((card,index)=>{
                return (
                    <>
                        <Col xxl={3} xl={3} lg={5} md={5} sm={12} xs={12} className="olympus-features-col" key={index} id={card.id}>
                            <div className='features-item-container'>
                                <div className='features-title-container'>
                                    <svg xmlns={card.xmlns} width="16" height="16" fill={card.fill} className={card.class} viewBox={card.viewBox}>
                                        <path d={card.path1}/>
                                        <path d={card.path2}/>
                                    </svg>
                                    <h5 className='features-title'>{card.title}</h5>
                                </div>
                                <p className='features-description'>{card.description}</p>
                            </div>
                        </Col>
                        
                    </>

                )
            })}

        </Row>
    </Container>
  )
}

export default Features