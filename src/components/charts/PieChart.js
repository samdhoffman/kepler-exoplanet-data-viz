import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js';

export default function PieChart() {
  const [starTypes, setStarTypes] = useState(null);

  useEffect(() => {
    fetch('/star_types').then(res => res.json()).then(data => {
      setStarTypes(data)
    });
  }, []);

  return (
    <div className="PieChart">
      {
        starTypes && 
        <Plot
          data={[
              {
                type: 'pie', 
                values: [starTypes["non-exoplanet"], starTypes["exoplanet"]],
                labels: ['Non-Exoplanet', 'Exoplanet'],
                marker: {
                  colors: ['rgb(31, 119, 180)','gold']
                },
              },
            ]}
            layout={ {width: 500, height: 500, title: 'Exoplanet Stars vs Non-Exoplanet Stars'} }
        />
      }
    </div>
  )
}
