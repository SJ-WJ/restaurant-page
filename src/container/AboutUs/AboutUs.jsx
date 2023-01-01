import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app_aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app_aboutus-content_about'>
        <h1 className='headtext_cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Gericht is more than just a restaurant - it's a culinary destination. From the moment you walk through our doors, you'll be transported to a world of exceptional flavors and impeccable service. Our talented team of chefs and dedicated staff are committed to delivering an unforgettable dining experience to each and every one of our guests. We can't wait to welcome you to Gericht Restaurant.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about__knife' />
      </div>

      <div className='app_aboutus-content_historu'>
        <h1 className='headtext_cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Gericht has a rich and colorful history dating back to the early 2000s. Founded by chef Kevin Luo, our restaurant quickly gained a reputation for serving some of the finest cuisine in the city. Through the years, we've consistently evolved and refined our menu, always striving to bring our guests the very best in fine dining. Today, we're proud to be a top destination for foodies and connoisseurs alike.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
