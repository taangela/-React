import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image}/>
    <p>{faqData.text}</p>
  </Container>
);

export default FAQ;