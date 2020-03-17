import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'
import StatsTable from './components/charts/StatsTable';
import ChartCarousel from './components/charts/ChartCarousel';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  // const [lightData, setLightData] = useState(null);
  // useEffect(() => {
  //   fetch('/hi').then(res => res.json()).then(data => {
  //     setLightData(data)
  //   });
  // }, []);


  return (
    <div className="App">
      <Layout>
        <ErrorBoundary>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={5} lg={4} className="stats-container">
                <StatsTable />
              </Col>
              <Col xs={12} sm={12} md={7} lg={8}>
                <ChartCarousel />
              </Col>
            </Row>
          </Container>
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
