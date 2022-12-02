import React from 'react'
import './services.css'
import {BiCheckboxSquare} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Problem solving</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Able to find an efficient solution to problems</p>
            </li>
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Work well with team to overcome challenges</p>
            </li>
          </ul>
        </article>
        {/* END OF PROBLEM SOLVING */}

        <article className="service">
          <div className="service__head">
            <h3>Fresh inputs</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Using both mathematical rigour and coding skills</p>
            </li>
            <li>
              <BiCheckboxSquare className='service__list-icon' />
              <p>Multi-disciplinary skillset to view problems from different angles</p>
            </li>
          </ul>
        </article>
        {/* END OF FRESH INPUTS */}
        
      </div>
    </section>
  )
}

export default Services