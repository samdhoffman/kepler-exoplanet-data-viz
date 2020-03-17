import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';

export default function Histogram() {
  const [fluxDist, setFluxDist] = useState(null);

  useEffect(() => {
    fetch('/flux').then(res => res.json()).then(data => {
      setFluxDist(data)
    });
  }, []);

  return (
    <div className="Histogram">
      {
        fluxDist &&
        <Plot
          data={[
            {
              x: fluxDist["non-exoplanet"],
              type: 'histogram',
              opacity: 0.5,
              name: 'Non-Exoplanets'
            },
            {
              x: fluxDist["exoplanet"],
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
              }
            } 
          }
        />
      }
    </div>
  )
}
