import React, { useState, useEffect } from 'react'
import './ChartCarousel.scss';
import Glide from '@glidejs/glide'
import PieChart from './PieChart'
import ScatterPlot from './ScatterPlot'
import Histogram from './Histogram'

export default function ChartCarousel() {
  const glide = new Glide('.glide', { 
    type: 'slider',
    autoplay: 7000,
  });

  useEffect(() => {
    glide.mount();
  }, [])

  return (
    <div className="ChartCarousel">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide"><PieChart /></li>
            <li className="glide__slide"><ScatterPlot /></li>
            <li className="glide__slide"><Histogram /></li>
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#60;</button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#62;</button>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
    </div>
  )
}
