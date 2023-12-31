import React, { useState } from "react";
import { Modal, Button, Form, ListGroup, Image, Card } from 'react-bootstrap';

const MyModal = ({ showModal, handleModalClose, title, image, text, price }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [review, setReview] = useState('');
  const [reviewsList, setReviewsList] = useState([]);

  const handleReviewFormOpen = () => {
    setShowReviewForm(true);
  };

  const handleReviewFormClose = () => {
    setShowReviewForm(false);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewsList([...reviewsList, review]);
    setReview('');
  };

  return (
    <Modal
      show={showModal}
      onHide={handleModalClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
        <Card.Img src={image} className="col" alt="image" style={{ height: '300px', width:'300px', objectFit: 'cover' }} />

        <div className="col mt-3" style={{ textAlign: 'left' }}>
          <p>{text}</p>
          <p style={{fontSize:'21px'}}>
            <b>Цена: {price} тг.</b>
          </p>
        </div>
        </div>

        <ListGroup>
          {reviewsList.map((review, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center">
              <div className="mr-3">
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png"
                  alt="image"
                  width={32}
                  height={32}
                  roundedCircle
                />
              </div>
              <div className="ml-3">
                <p>Пользователь</p>
                <p>{review}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {showReviewForm ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="reviewForm">
              <Form.Label>Отзыв:</Form.Label>
              <Form.Control as="textarea" rows={3} value={review} onChange={handleReviewChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
            <Button variant="secondary" onClick={handleReviewFormClose}>
              Отмена
            </Button>
          </Form>
        ) : (
          <Button variant="primary" onClick={handleReviewFormOpen}>
            Написать отзыв
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
