import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Jack, Liabs',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, doloribus quo veniam velit eum non tempora modi? Architecto nulla neque amet sit explicabo rerum, maiores perspiciatis, modi atque, corrupti eveniet!'
  },
  {
    avatar: AVTR2,
    name: 'Jabar, Okeye',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum impedit amet qui id, culpa maiores, tempore dicta maxime corporis adipisci reprehenderit numquam laborum cupiditate vel, ad odio inventore deleniti consectetur!'
  },
  {
    avatar: AVTR3,
    name: 'Nick, Herrington',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis alias quasi pariatur, modi aliquid aut nobis vel delectus autem itaque maiores dolorum dicta excepturi? Libero iste expedita ea perferendis corporis hic?'
  },
  {
    avatar: AVTR4,
    name: 'Carrie, Longheart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis asperiores, velit illo omnis adipisci quam voluptatum accusamus enim ipsa sequi! Libero error recusandae et doloribus suscipit, consequatur dolorum.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonals'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials