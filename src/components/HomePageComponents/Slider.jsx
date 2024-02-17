import React from 'react'
import '../../styles/Slider.css'
import { FaArrowRight } from 'react-icons/fa';

const Slider = () => {
  return (
    <div className='slider-container'>
        <div className='text-wrapper'>
      <p className='slider-text'>We Picked Every Item <span>With Care,</span><span style={{color:'orange'}}>You Must Try</span>At least Once.</p>
      <button className='collection-button'>Go to Collection <FaArrowRight/></button>
        </div>
      <div class="slider-buttons">
        <div class="ellipse-button"></div>
        <div class="ellipse-button orange-button"></div>
        <div class="ellipse-button"></div>
      </div>
    </div>
  )
}

export default Slider
