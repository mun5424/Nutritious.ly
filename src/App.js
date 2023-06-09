import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import food from './data/food.json';
import './App.css';



export default function MyApp() {

  const foods = [...food.food];
  
  function displayFoodCards(foods) {
    return foods.map(item=> (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imageURL} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <div>Calories: {item.calories}</div>
          <div>Total Fat: {item.totalFat}</div>
          <div>Saturated Fat: {item.saturatedFat}</div>
          <div>Cholesterol: {item.cholesterol}</div>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    ));
  }

  return (
    <Container>
      
      <h1 className="header">
        Nutrition
      </h1>
      <Row> 
      {displayFoodCards(foods)}

      </Row>
    </Container>
  )

  

}
