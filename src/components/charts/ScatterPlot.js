import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';

export default function ScatterPlot() {
  const [scatterState, setScatterState] = useState(null);

  useEffect(() => {
    fetch('/flux').then(res => res.json()).then(data => {
      setScatterState(data)
    });
  }, []);

  return (
    <div className="ScatterPlot">
      {
        scatterState &&
        <Plot
          data={[
            {
              x: scatterState["flux_range"],
              y: scatterState["non-exoplanet"],
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
              x: scatterState["flux_range"],
              y: scatterState["exoplanet"],
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
            },
            // {type: 'bar', x: "Light Intensity", y: "Label"},
            
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
