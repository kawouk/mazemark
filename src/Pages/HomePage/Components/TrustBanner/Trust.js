import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {TrustCards} from './TrustCards';
import './trust.css';


function Trust() {
  return (
    <Container fluid className="trust-container">
        <Row className="trust-row">
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            <Col className="trust-content-col" xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
                <h1 className="trust-title">The Industry Trusts Us For Many Reasons:</h1>
                <Row className="trust-cards-row">
                    {TrustCards.map((card,index)=>{
                        return(
                            <>
                            <Col className="trust-card-col" key={index} xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                                <div className='why-us-card-container'>
                                    <svg xmlns={card.xmlns} width="16" height="16" fill={card.fill} class={card.class} viewBox={card.viewBox}>
                                    <path d={card.path}/>
                                    </svg>
                                    <div className='why-us-card-text'>
                                        <h2 className='why-us-card-num'>{card.num}</h2>
                                        <h3 className='why-us-card-title'>{card.title}</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                            </>

                        )
                    })}
                </Row>
            </Col>
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}></Col>

        </Row>
    </Container>
  )
}

export default Trust