
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import food from './data/food.json';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



export default function MyApp() {

  const jsonFoods = food.food;

  const bgColors = [
  'linear-gradient(to bottom, #fabcbc 0%, #ffe5ff 50%)',
  'linear-gradient(to bottom, #ffece7 0%, #fff5ff 50%)', 
  'linear-gradient(to bottom, #f6f6c5 0%, #fff5ff 50%)', 
  'linear-gradient(to bottom, #cef9bd 0%, #fff5ff 50%)', 
  'linear-gradient(to bottom, #bfddf8 0%, #fff5ff 50%)', 
  'linear-gradient(to bottom, #cbcffe 0%, #fff5ff 50%)', 
  'linear-gradient(to bottom, #f0ceff 0%, #fff5ff 50%)' 
  ]

  const [foods, setFoods] = useState(jsonFoods);
  const [searchInput, setSearchInput] = useState("");


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


  function getRandomGradientColor() {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }

  function renderFoodCards(foods) {
    return (
      <div className="cards-container">
        { foods.map(item=> (
          <Card className="card" style={{ width: '18rem', backgroundImage: getRandomGradientColor() }}>
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
          <Button variant="outline-info" onClick={() => shuffleCards()}>
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

  function handleSearchChange(text) {
    const filteredFoods = foods.filter(food => {
      return food.name.match(text);
    })
    setSearchInput(text);
  }

  function navbar() {
    return (
      <Container className="navbar">
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
            <Nav.Link>Food</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
          
          {buttonComponents()}
          <Nav className="navbar-search">
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(text) => handleSearchChange(text)}
              />
              <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>

    )
  }

  function footer() {
    return (
      <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
      <div className="text-center">
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
          {renderFoodCards(foods)}
        </Row>
      </div>
      {footer()}
    </div> 
     )

  

}
