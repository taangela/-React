import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoData} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image= {infoData.image}/>
    <p>{infoData.text}</p>
  </Container>
);

export default Info;