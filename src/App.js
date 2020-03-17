import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'
import StatsTable from './components/charts/StatsTable';
import ChartCarousel from './components/charts/ChartCarousel';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
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
            <Row>
              <Col>
                <p>
                  The data for this project describes the change in flux (light intensity) of several thousand stars. 
                  Each star has a binary label of 2 or 1, where 2 indicates that that the star is confirmed to have at least one exoplanet in orbit.
                  If said star is watched over several months or years, there may be a regular 'dimming' of the flux. 
                  This is evidence that there may be one or more orbiting bodies around the star.
                  The charts featured on this page will help convey the distribution of the types of celestial objects, how bright they are, and how they change over time. 
                </p>
              </Col>
            </Row>
          </Container>
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
