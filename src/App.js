import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import food from './data/food.json';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { useState } from 'react';



export default function MyApp() {

  const [foods, setFoods] = useState([...food.food]);

  
  function renderFoodCards(foods) {
    return foods.map(item=> (
      <Card className="card" style={{ width: '18rem' }}>
            <div className="image-container">
              <img className="item-image" src={item.imageURL}></img>
            </div>
            <div className="card-body">
              <div className="card-title-container">
                <div className="card-title-logo">
                  <img className="logo" src={item.logoURL}></img>
                </div>
                <div className="card-title-text">
                  <span className="item-title"> {item.name}</span>
                </div>
              </div>
                <div className="card-body">
                  <div className="calories detail-justify font"> 
                  <div>Calories</div>
                  <div>{item.calories}</div> 
                  </div>
                  <div className="totalfat detail-justify font">
                    <div>Total Fat</div>
                    <div>{item.totalFat}</div> 
                  </div>
                  <div className="saturatedfat detail-justify font">
                    <div>Sat Fat</div>
                    <div>{item.saturatedFat}</div> 
                  </div>
                  <div className="cholesterol detail-justify font">
                    <div>Cholesterol</div>
                    <div>{item.cholesterol}</div>
                    </div>
                </div>
            </div>
      </Card>
    ));
  }

  return (
    <Container>
      <Navbar className="header-font-bold" expand="lg">
          <Navbar.Brand href="#home"> Nutritious.ly </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Food</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Row>
        {renderFoodCards(foods)}
      </Row>
      </Container>
  )

  

}
