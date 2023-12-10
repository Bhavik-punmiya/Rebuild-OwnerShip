import React from 'react';
import './css/Scheme.css';
import { Card, Row, Col } from 'react-bootstrap';


export default function Scheme() {
 return (
  <div className="schemes-page">
     {createCard('./img/schemes/government.jpg', 'Odissha Government', 'This is a wider card with supporting text...')}
     {createCard('./img/schemes/government.jpg', 'Rajasthan Government', 'This is another wider card with supporting text...')}
     {createCard('./img/schemes/government.jpg', 'Maharastra Government', 'This is a wider card with supporting text...')}
     {createCard('./img/schemes/government.jpg', 'Maharastra Government', 'This is a wider card with supporting text...')}
   </div>
 );
}



function createCard(imgSrc, title, text) {
    return (
      <Card className="my-card" style={{ width: '80rem', height:'18rem'}}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img  className="image" src={require(`${imgSrc}`)} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {text}
              </Card.Text>
              <Card.Text>
                <small className="text-muted  text-white" >Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
   }