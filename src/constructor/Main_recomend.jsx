import React from 'react';
import ImgCard from '../components/img_card.component';
import cardsData from '../Data/data';
import { Container } from 'react-bootstrap';

const MainRecomend = () => {
  // Выберите определенные элементы из массива cardsData
  const selectedCards = [
    cardsData[164],
    cardsData[189],
    cardsData[167],
    cardsData[172],
    cardsData[191],
    cardsData[190],
    cardsData[170],
    cardsData[187]
  ];

  return (
    <Container style={{ marginLeft: '10%' }}>
      <div className="row mb-3">
        {selectedCards.slice(0, 4).map((card, index) => (
          <ImgCard
            className="col-3"
            key={index}
            image={card.image}
            title={card.name}
            Rating={card.Rating}
            text={card.text}
            price={card.price}
          />
        ))}
      </div>

      <div className="row">
        {selectedCards.slice(4, 8).map((card, index) => (
          <ImgCard
            className="col-3"
            key={index}
            image={card.image}
            title={card.name}
            Rating={card.Rating}
            text={card.text}
            price={card.price}
          />
        ))}
      </div>
    </Container>
  );

};

export default MainRecomend;
