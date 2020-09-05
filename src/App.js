// import "bootstrap/dist/css/bootstrap.css";

import React, { Component } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import places from './data/cities';
import './App.css';
import { Navbar, Nav, Container, Row, Col }  from "react-bootstrap";
import 'bootswatch/dist/journal/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav 
                className ="flex-column"
                variant="pills"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {places.map((place, index) => (
                  <Nav.Item>
                    <Nav.Link key={index} eventKey={index}>{place.name} </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={places[activePlace].zip} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default App;
