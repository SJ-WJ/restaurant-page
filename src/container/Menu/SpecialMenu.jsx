import React from 'react';

import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palate'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_appetizers flex__center'>
        <p className='app__specialMenu-menu_heading'>Appetizers</p>
        <div className='app__specialMenu_menu_items'>
          {data.appetizers.map((appetizer, index) => {
            return <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags}/>
          })}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.dish} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_mains flex__center'>
        <p className='app__specialMenu-menu_heading'>Mains</p>
        <div className='app__specialMenu_menu_items'>
        {data.mains.map((main, index) => {
            return <MenuItem key={main.title + index} title={main.title} price={main.price} tags={main.tags}/>
          })}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    
  </div>
);

export default SpecialMenu;
