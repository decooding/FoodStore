import React, { useState } from "react";
import {Card, Carousel, Row, Col } from "react-bootstrap";
import cardsData from "../Data/data";
import MyModal from "./mymodal.component";

const CardList = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const handleModalOpen = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const cardColumns = cardsData.slice(0, 144).reduce((columns, card, index) => {
    const columnIndex = Math.floor(index / 4);
    columns[columnIndex] = columns[columnIndex] || [];
    columns[columnIndex].push(card);
    return columns;
  }, []);

  const cardGroups = cardColumns.map((cards, index) => (
    <Carousel.Item key={index} style={{ transition: "0.6s" }}>
      <Row className="card-deck">
        {cards.map((card, index) => (
          <Col key={index} md={3}>
            <Card
              onClick={() => handleModalOpen(card)}
              style={{
                width: "315px",
                height: "300px",
                textAlign: "left",
              }}
            >
              <Card.Img variant="top" src={card.image} style={{ height: "150px", width: "150px", margin: "0 auto" }} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text style={{fontSize:'21px'}}>Цена: {card.price} тг.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ));

  return (
    <div>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        indicators={false}
        className="mt-4"
      >
        {cardGroups}
      </Carousel>

      {showModal && selectedCard && (
        <MyModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          title={selectedCard.name}
          image={selectedCard.image}
          text={selectedCard.text}
          price={selectedCard.price}
        />
      )}
    </div>
  );
};

export default CardList;
