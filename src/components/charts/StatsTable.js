import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios';

class StatsTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stats: null
    }
  }
  
  componentDidMount() {
    axios.get('/stats')
      .then(res => {
        this.setState({stats: res.data})
      })
      .catch((error) => {
        this.setState(() => { throw error; });
      });
  }

  render() {
    return (
      <div className="StatsTable">
        {
          this.state.stats &&
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
                <td>{this.state.stats["non-exoplanet"].mean}</td>
                <td>{this.state.stats["non-exoplanet"].median}</td>
                <td>{this.state.stats["non-exoplanet"].min_val}</td>
                <td>{this.state.stats["non-exoplanet"].max_val}</td>
              </tr>
              <tr>
                <td>Non-Exoplanets (2)</td>
                <td>{this.state.stats["exoplanet"].mean}</td>
                <td>{this.state.stats["exoplanet"].median}</td>
                <td>{this.state.stats["exoplanet"].min_val}</td>
                <td>{this.state.stats["exoplanet"].max_val}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{this.state.stats["total"].mean}</td>
                <td>{this.state.stats["total"].median}</td>
                <td>{this.state.stats["total"].min_val}</td>
                <td>{this.state.stats["total"].max_val}</td>
              </tr>
            </tbody>
          </Table>
        }
      </div>
    )
  }
}

export default StatsTable;