import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

export default function StatsTable() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/stats').then(res => res.json()).then(data => {
      setStats(data)
    });
  }, []);

  return (
    <div className="StatsTable">
      {
        stats &&
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Intensity Values</th>
              <th>Mean</th>
              <th>Median</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Non-Exoplanets (1)</td>
              <td>{stats["non-exoplanet"].mean}</td>
              <td>{stats["non-exoplanet"].median}</td>
              <td>{stats["non-exoplanet"].min_val}</td>
              <td>{stats["non-exoplanet"].max_val}</td>
            </tr>
            <tr>
              <td>Non-Exoplanets (2)</td>
              <td>{stats["exoplanet"].mean}</td>
              <td>{stats["exoplanet"].median}</td>
              <td>{stats["exoplanet"].min_val}</td>
              <td>{stats["exoplanet"].max_val}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{stats["total"].mean}</td>
              <td>{stats["total"].median}</td>
              <td>{stats["total"].min_val}</td>
              <td>{stats["total"].max_val}</td>
            </tr>
          </tbody>
        </Table>
      }
    </div>
  )
}
