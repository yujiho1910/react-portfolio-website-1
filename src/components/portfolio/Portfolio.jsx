import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/connect4.jpeg'
import IMG2 from '../../assets/moblima.jpeg'
import IMG3 from '../../assets/sudoku.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Connect4 game',
    subtext: "Console based, Language: Python",
    github: 'https://github.com/yujiho1910/connect4',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie Booking Interface',
    subtext: 'Console Based, Language: Java',
    github: 'https://github.com/neysanfoo/SC2002',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sudoku',
    subtext: 'Language: Java',
    github: 'https://github.com/yujiho1910/',
    demo: 'https://github.com'
  }
] // to make it dynamic
  
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtext, github, demo}) => {
            return (
                <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small className='text-light'>{subtext}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
              )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio