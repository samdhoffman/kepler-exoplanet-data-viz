import React from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';
import { Spinner } from 'react-bootstrap'

class PieChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      starTypes: null
    }
  }

  componentDidMount() {
    axios.get('/star_types')
      .then(res => {
        this.setState({starTypes: res.data})
      })
      .catch((error) => {
        this.setState(() => { throw error; });
      });
  }

  render() {
    return (
      <div className="PieChart">
        {
          this.state.starTypes 
          ? 
          <Plot
            data={[
                {
                  type: 'pie', 
                  values: [this.state.starTypes["non-exoplanet"], this.state.starTypes["exoplanet"]],
                  labels: ['Non-Exoplanet', 'Exoplanet'],
                  marker: {
                    colors: ['rgb(31, 119, 180)','gold']
                  },
                },
              ]}
              layout={ {width: 500, height: 500, title: 'Exoplanet Stars vs Non-Exoplanet Stars'} }
          />
          :
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>

        }
      </div>
    )
  }
}

export default PieChart;