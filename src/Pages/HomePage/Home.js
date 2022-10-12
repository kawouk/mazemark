import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import './Home.css';

function Home({setShow}) {


  return (
    <Container fluid className="home-page-container"  >
      <Row className="home-banner-row" onClick={()=> setShow(true)} >
          <HomeBanner />
      </Row>
    </Container>
  )
}

export default Home