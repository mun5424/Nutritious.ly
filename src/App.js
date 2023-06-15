import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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

  const jsonFoods = food.food;

  const [foods, setFoods] = useState(jsonFoods);

  function shuffleCards() {
    for (let i = 0; i < foods.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (foods.length - i));
      let temp = foods[j];
      foods[j] = foods[i];
      foods[i] = temp;
    }
    setFoods([...foods]);
  };


  function sortBy(orderType) {
    const sorted = [...foods].sort((a, b) => {
      return a[orderType] - b[orderType];
    });
    setFoods(sorted);
  }


  function renderFoodCards(foods) {
    return (
      <div className="cards-container">
        { foods.map(item=> (
          <Card className="card" style={{ width: '18rem' }}>
                <div className="image-container">
                  <img className="item-image" src={item.imageURL}></img>
                </div>
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
          </Card>
      ))
    }
    </div>
    )
  }

  function buttonComponents() {
    return (
      <div className="buttons-container">
        <div className="button-container"> 
          <Button onClick={() => shuffleCards()}>
            Shuffle
          </Button>
        </div>
        <div className="dropdown-container"> 
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item onClick={() => sortBy("calories")}>Calories </Dropdown.Item>
            <Dropdown.Item onClick={() => sortBy("totalFat")}>Total Fat</Dropdown.Item>
            <Dropdown.Item onClick={() => sortBy("saturatedFat")}>Saturated Fat</Dropdown.Item>
            <Dropdown.Item onClick={() => sortBy("cholesterol")}>Cholesterol</Dropdown.Item>
          </DropdownButton>
        </div> 
          
      </div>
    );
  }

  function navbar() {
    return (
      <div className="navbar">
        <Navbar className="header-font-bold" expand="lg">
        <Navbar.Brand className="brand-font" href="#home"> 
          Nut
          <span className="calories">r</span>i
          <span className="cholesterol">t</span>i
          <span className="totalfat">o</span>u
          <span className="saturatedfat">s</span>.ly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Food</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }

  function footer() {
    return (
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small> Created by Charlie Oh @mun5424. This application is for educational purposes and not for any kind of monetary profit. </small>
      </div>
    </footer>
    )
  }

  return (
    <div>
      {navbar()}
      <div className="container">
        <Row>
          {buttonComponents()}
        </Row>
        <Row>
          {renderFoodCards(foods)}
        </Row>
      </div>
      {footer()}
    </div> 
     )

  

}
