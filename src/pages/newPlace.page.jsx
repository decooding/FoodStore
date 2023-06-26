import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import cardsData from '../Data/data';
import PlaceBlock from '../components/placeBlock.component';

export default class New extends Component {
  render() {
    return (
      <Container style={{marginTop:'120px'}}>
        {cardsData.map((data, index) => (
          <PlaceBlock
            key={index}
            name={data.name}
            image={data.image}
            price={data.price}
            text={data.text}
          />
        ))}
      </Container>
    );
  }
}
