import React, { useRef } from 'react'
import './testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

  const slider =useRef();
  let tx = 0;

  const sliderForward =()=>{
    if (tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const sliderBackward =()=>{
    if (tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  

  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={sliderForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={sliderBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Aarav Mehta</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
              The university has provided me with incredible learning opportunities and hands-on experience. The faculty is highly supportive, and the campus environment is vibrant and inspiring!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Riya Sharma</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
              I love the diverse culture and excellent infrastructure here. The placement support is outstanding, and the curriculum is well-structured to prepare us for real-world challenges
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Kabir Verma</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
              Being a part of this university has been a transformative journey. The extracurricular activities and clubs have helped me grow both academically and personally
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Neha Kapoor</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
              The research opportunities and industry exposure provided by the university are remarkable. I feel confident and well-prepared for my future career
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
