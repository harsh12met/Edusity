import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png' 

const Contact = () => {
  return (
    <div className="contact">
      <div className='contact-col'>
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact information below .your feedback, questions ,and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li>contactUNI123@gmail.com</li>
          <li>+91 543-234-5674</li>
          <li>MH18 Dhule Maharashtra, India</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Contact
