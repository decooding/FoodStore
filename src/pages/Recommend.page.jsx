import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import cardsData from '../Data/data';
import PlaceBlock from '../components/placeBlock.component';

export default class New extends Component {
  render() {

    const selectedCards = [
      cardsData[164],
      cardsData[189],
      cardsData[167],
      cardsData[172],
      cardsData[191],
      cardsData[190],
      cardsData[170]

      ];
      
    return (
      <Container style={{marginTop:'120px'}}>
        {selectedCards.map((data, index) => (
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
