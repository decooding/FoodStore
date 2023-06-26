import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import MyModal from './mymodal.component';

function PlaceBlock(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="mb-3" style={{ width: '100%' }} onClick={handleModalOpen}>
        <Card.Body className="d-flex flex-column">
          <div className="row">
            <div className="col-4">
              <Card.Img src={props.image} alt="image" style={{ height: '250px', width:'250px', objectFit: 'cover' }} />
            </div>

            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <h5>{props.name}</h5>
              </div>

              <div className=" mt-3" style={{ textAlign: 'left' }}>
                <p>
                  <b style={{fontSize:'18px'}}>Цена: {props.price} тг.</b> 
                </p>
                <div className="date">{props.text}</div>

              </div>

              <div className="d-flex justify-content-end align-items-center mt-2">
                <div>{props.category}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

        <MyModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          title={props.name}
          image={props.image}
          text={props.text}
          price={props.price}
        />
    </>
  );
}

export default PlaceBlock;
