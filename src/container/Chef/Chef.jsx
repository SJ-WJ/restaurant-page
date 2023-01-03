import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Gericht: Elevating the art of dining.</p>
        </div>
        <p className='p__opensans'>As the main chef and founder of Gericht, I am proud to offer our guests a dining experience that showcases the diverse flavors and techniques of international cuisines. At Gericht, we use only the highest quality ingredients, and we are always seeking to innovate and bring new and exciting dishes to our menu. I am deeply passionate about food and the culinary arts, and I am committed to providing our guests with exceptional service and an unparalleled dining experience. I look forward to the opportunity to serve you at Gericht.</p>
      </div>

      <div className="app__chef-sign">
        <p >Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
