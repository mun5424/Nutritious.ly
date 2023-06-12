import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import food from './data/food.json';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';



export default function MyApp() {

  const foods = [...food.food];
  
  function renderFoodCards(foods) {
    return foods.map(item=> (
      <Card className="card" style={{ width: '18rem' }}>
            <div className="image-container">
            <img className="item-image" src={item.imageURL}></img>
            </div>
            <Card.Body className="card-body">
              <div className="card-title-container">
                <div className="card-title-logo">
                  <img className="logo" src={item.logoURL}></img>
                </div>
                <div className="card-title-text">
                  <h5> {item.name} </h5>
                </div>
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
