import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Are you ready to discover the key to fine dining? Look no further than Gericht Restaurant. Our team of skilled chefs is dedicated to creating mouthwatering dishes that will tantalize your taste buds and elevate your dining experience. From classic dishes to innovative new flavors, we have something for every palate. Join us at Gericht and unlock the door to culinary excellence.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
