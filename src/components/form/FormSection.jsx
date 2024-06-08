import React from 'react'
import ContactMe from './ContactMe'

const FormSection = () => {

  return (
    <div 
      className='form__Container'
    >
      <div className='company__details'>
        <div className='company__logo'>
          <img src="https://dxw9jueyijhmn.cloudfront.net/ez_website/frontend_img/CommonImages/logo.webp" alt="company logo" />
          <span>Works</span>
        </div>
        <h2>Suite Of Business Support Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae sint a quod dicta iste, voluptates illo minima amet magni aspernatur.
        </p>
      </div>
      <div className='contact__me__desktop__view'>
        <ContactMe />
      </div>
    </div>
  )
}

export default FormSection