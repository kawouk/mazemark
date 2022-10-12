import React from 'react';
import Header from '../../Layout/Header/Header';
import PageBanner from '../../Layout/PageBanner/PageBanner';
import ServicesArticle from './Components/ServicesArticle';
import Footer from '../../Layout/Footer/Footer';

function Services() {
  return (
    <>
    <Header />
    <PageBanner title="Services Details" />
    <ServicesArticle />
    <Footer />
    </>
  )
}

export default Services