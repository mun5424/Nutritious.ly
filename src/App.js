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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



export default function MyApp() {

  function shuffleCards(foods) {
    for (let i = 0; i < foods.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (foods.length - i));
      let temp = foods[j];
      foods[j] = foods[i];
      foods[i] = temp;
    }

    return foods;
  };

  const jsonFoods = food.food;

  const [foods, setFoods] = useState(shuffleCards(jsonFoods));

  function sortBy(orderType) {
    const sorted = [...foods].sort((a, b) => {
      return a[orderType] - b[orderType];
    });
    setFoods(sorted);
  }


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
                  <div>{item.calories}kcal</div> 
                  </div>
                  <div className="totalfat detail-justify font">
                    <div>Total Fat</div>
                    <div>{item.totalFat}g</div> 
                  </div>
                  <div className="saturatedfat detail-justify font">
                    <div>Sat Fat</div>
                    <div>{item.saturatedFat}g</div> 
                  </div>
                  <div className="cholesterol detail-justify font">
                    <div>Cholesterol</div>
                    <div>{item.cholesterol}mg</div>
                    </div>
                </div>
            </div>
      </Card>
    ));
  }

  function sortByComponent() {
    return (
      <div className="dropdown-container"> 
        <DropdownButton id="dropdown-basic-button" title="Sort By">
          <Dropdown.Item onClick={() => sortBy("calories")}>Calories </Dropdown.Item>
          <Dropdown.Item onClick={() => sortBy("totalFat")}>Total Fat</Dropdown.Item>
          <Dropdown.Item onClick={() => sortBy("saturatedFat")}>Saturated Fat</Dropdown.Item>
          <Dropdown.Item onClick={() => sortBy("cholesterol")}>Cholesterol</Dropdown.Item>
        </DropdownButton>
      </div> 
    );
  }

  function recommendButton() {
    return (
      <div className="button-container"> 
        <Button>
          Shuffle
        </Button>
      </div>
    );
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
        {sortByComponent()}
        {recommendButton()}
      </Row>
      <Row>
        {renderFoodCards(foods)}
      </Row>
    </Container>
  )

  

}
