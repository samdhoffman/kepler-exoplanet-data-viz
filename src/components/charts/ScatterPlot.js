import React from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';

class ScatterPlot extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      scatterData: null
    }
  }

  componentDidMount() {
    axios.get('/flux')
      .then(res => {
        this.setState({scatterData: res.data})
      })
      .catch((error) => {
        this.setState(() => { throw error; });
      });
  }

  render() { 
    return (
      <div className="ScatterPlot">
        {
          this.state.scatterData &&
          <Plot
            data={[
              {
                x: this.state.scatterData["flux_range"],
                y: this.state.scatterData["non-exoplanet"],
                mode: 'markers',
                type: 'scatter',
                name: 'Non-Exoplanets',
                text: 'Light Intensity',
                hoverinfo: "text+y+name",
                marker: { 
                  size: 12, 
                  symbol: 'star-diamond', 
                  opacity: 0.9,
                  line: {
                    color: [[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']],
                    width: 1
                  }
                }
              },
              {
                x: this.state.scatterData["flux_range"],
                y: this.state.scatterData["exoplanet"],
                mode: 'markers',
                type: 'scatter',
                name: 'Exoplanets',
                text: 'Light Intensity',
                hoverinfo: "text+y+name",
                marker: { 
                  size: 12, 
                  symbol: 'star', 
                  autocolorscale: false,
                  color: 'gold',
                  line: {
                    color: [[0, 'rgb(0,0,255)'], [1, 'rgb(255,0,0)']],
                    width: 1
                  }
                  }
              }
            ]}
            layout={ 
              {
                title: 'Star Distribution Over Time',
                xaxis: {
                  title: "Flux Range"
                },
                yaxis: {
                  title: "Light Intensity"
                }
              } 
            }
          />
        }
      </div>
    )
  }
}

export default ScatterPlot;