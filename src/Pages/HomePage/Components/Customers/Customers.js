import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { CustomerCards1 } from './CustomerCards1';
import {RiStarSFill} from 'react-icons/ri';
import './Customers.css';

function Customers() {
  return (
    <Container fluid className="customers-container" id="customers-section">
          <Row clasName='customers-row'>
            <Carousel variant="dark" className="customers-carousel">
              {CustomerCards1.map((card, index) =>{
                return ( 
                  <Carousel.Item className="customer-card" key={index}> 
                    <a href={card.link} className="customer-link-img">
                    <img className="d-block w-100 customer-logo" src={card.src} alt={card.alt} id={card.id}/>  
                    </a>                     
                        <Carousel.Caption className="customer-card-caption">
                          <a href={card.link} target="_blank" className="customer-link-heading" >
                            <h3 className="customers-name">{card.name}</h3>
                          </a>
                          <div>
                          <RiStarSFill className='star-review-icon' />
                          <RiStarSFill className='star-review-icon' />
                          <RiStarSFill className='star-review-icon' />
                          <RiStarSFill className='star-review-icon' />
                          <RiStarSFill className='star-review-icon' />
                          </div>
                        </Carousel.Caption>
  
                  </Carousel.Item>
                )
              })}
            </Carousel>

          </Row>
    </Container>
  )
}

export default Customers