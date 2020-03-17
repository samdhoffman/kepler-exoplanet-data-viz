import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'
import PieChart from './components/charts/PieChart';

function App() {
  // const [lightData, setLightData] = useState(null);
  // useEffect(() => {
  //   fetch('/hi').then(res => res.json()).then(data => {
  //     setLightData(data)
  //   });
  // }, []);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={5} lg={4} className="stats-container">
            stats to go here
          </Col>
          <Col xs={12} sm={12} md={7} lg={8}>
            <PieChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
