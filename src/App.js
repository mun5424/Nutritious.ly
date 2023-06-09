import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import food from './data/food.json';
import './App.css';



export default function MyApp() {

  const foods = [...food.food];
  
  function displayFoodCards(foods) {
    return foods.map(item=> (
      <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imageURL} />
            <Card.Body className="card-body">
              <div className="card-title-container">
                <img className="logo" src={item.logoURL}></img>
                <Card.Title className="card-title"> {item.name}</Card.Title>
              </div>
                  <div className="card-body">
                  <div className="calories font">Calories<br/> {item.calories}</div>
                  <div className="totalfat font">Total Fat <br/> {item.totalFat}</div>
                  <div className="saturatedfat font">Sat Fat <br/> {item.saturatedFat}</div>
                  <div className="cholesterol font">Cholesterol <br/> {item.cholesterol}</div>
                  </div>
            </Card.Body>
      </Card>
    ));
  }

  return (
    <Container>
      
      <h1 className="header">
        Nutritious.ly
      </h1>
      <Row> 
      {displayFoodCards(foods)}

      </Row>
    </Container>
  )

  

}
