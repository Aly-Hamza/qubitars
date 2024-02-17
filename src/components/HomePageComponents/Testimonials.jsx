import React from 'react'
import '../../styles/Testimonial.css'
import Testimonial1 from '../../images/testimonial1.png'
import Testimonial2 from '../../images/testimonial2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <>
    <h1 className='latest-reviews'>Our Latest Reviews</h1>
    <div className='cards'>
        <div className='card-1'>
            <img src={Testimonial1} alt="" />
            <p className='AuthorName'>Anna Merry</p>
            <p>Sambikes offers seamless bike services, providing effortless booking, skilled technicians, and transparent pricing. Experience convenience and reliability with Sambikes</p>
            <p>23rd Oct, 2023</p>

        </div>
        <div className='card-2'>
        <img src={Testimonial2} alt="" />
        <p className='AuthorName'>Anna Merry</p>
        <p>Experience excellence with Sambikes – your trusted bike service partner. From easy booking to skilled technicians and transparent pricing, Sambikes ensures top-notch service</p>
        <p>13rd Dec, 2023</p>
        </div>
    </div>
        <div className="arrow">
        <FaArrowLeft className="backward" />
        <FaArrowRight className="forward" />
       </div>
       <hr/>
    </>
  )
}

export default Testimonials
