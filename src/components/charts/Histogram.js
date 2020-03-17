import React from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';

class Histogram extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fluxDist: null
    }
  }

  componentDidMount() {
    axios.get('/flux')
      .then(res => {
        this.setState({fluxDist: res.data})
      })
      .catch((error) => {
        this.setState(() => { throw error; });
      });
  }

  render() {
    return (
      <div className="Histogram">
        {
          this.state.fluxDist &&
          <Plot
            data={[
              {
                x: this.state.fluxDist["non-exoplanet"],
                type: 'histogram',
                opacity: 0.5,
                name: 'Non-Exoplanets'
              },
              {
                x: this.state.fluxDist["exoplanet"],
                type: 'histogram',
                opacity: 0.6,
                name: 'Exoplanets',
                marker: {
                  color: 'gold',
                },
              }
            ]}
            layout={ 
              {
                width: 600, height: 500, 
                title: 'Light Intensity Histogram', 
                barmode: "overlay",
                xaxis: {
                  title: "Light Intensity"
                },
                yaxis: {
                  title: "Star Count"
                }
              } 
            }
          />
        }
      </div>
    )
  }
}

export default Histogram;