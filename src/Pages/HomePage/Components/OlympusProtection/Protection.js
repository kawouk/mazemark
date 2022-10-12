import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProtectionCards } from './ProtectionCards';
import './Protection.css'

function Protection() {
  return (
    <Container fluid className='olympus-protection-container'>
        <div className='protection-sub-container'>
        <Row className='protection-heading-row'>
            <h2 className='protection-heading'>
                We Can Protect You From: 
            </h2>
        </Row>
        <Row className='protection-cards-row'>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col className='protection-content-col'>
                <Row className='protection-card-row'>
                    {ProtectionCards.map((card, index) =>{
                        return(
                            <Col className='protection-card-col' id={card.id} xxl={3} xl={3} lg={6} md={6} sm={6} xs={12}key={index}>
                                <div className='challenges-container-div'>
                                    <div className='protection-title-card-container'>
                                        <svg xmlns={card.xmlns} width="16" height="16" fill={card.fill} class={card.className} viewBox={card.viewBox}>
                                            <path d={card.path1}/>
                                            <path d={card.path2}/>
                                        </svg>
                                        <h5 className="challenges-card-title">{card.title}</h5>
                                    </div>
                                    <p className="challenges-card-description">{card.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        </Row>
        </div>
        
    </Container>
  )
}

export default Protection