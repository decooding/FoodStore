import React, { Component } from 'react';
import cardsData from '../../Data/data';
import PlaceBlock from '../../components/placeBlock.component';
import { Container } from 'react-bootstrap';

export default class Cafe extends Component {
  render() {
    const filteredData = cardsData.filter((data) => data.category === 'brad');

    return (
      <Container style={{marginTop:'120px'}}>
        {filteredData.map((data, index) => (
          <PlaceBlock
            key={index}
            image={data.image}
            name={data.name}
            text={data.text}
            price={data.price}
          />
        ))}
      </Container>
    );
  }
}
