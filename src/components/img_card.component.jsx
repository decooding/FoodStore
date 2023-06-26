import React, { useState } from "react";
import MyModal from './mymodal.component';
import "./img_card.css";
<style>
  
</style>
const ImgCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const { image, title, text, price } = props;
  
  return (
    <>
      <div className="card-bady" onClick={handleModalOpen}>
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p><b>Цена: {price} тг.</b></p>
        </div>
      </div>

      <MyModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        title={title}
        image={image}
        text={text}
        price={price}
       
      />
    </>
  );
};

export default ImgCard;
