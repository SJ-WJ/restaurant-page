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
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, voluptatibus pariatur aut natus fugit, laboriosam aperiam eos, quia consequatur fugiat quaerat quasi maxime. Alias minima neque assumenda excepturi quae!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about__knife' />
      </div>

      <div className='app_aboutus-content_historu'>
        <h1 className='headtext_cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, voluptatibus pariatur aut natus fugit, laboriosam aperiam eos, quia consequatur fugiat quaerat quasi maxime. Alias minima neque assumenda excepturi quae!</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
