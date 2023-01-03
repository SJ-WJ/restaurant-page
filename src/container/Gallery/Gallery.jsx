import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const instaImg = [images.gallery01, images.gallery02, images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  
  return (
    <div className="app__gallery flex_center">
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>We invite you to connect with us on Instagram at @gericht to stay informed about the latest happenings at our establishment. In addition to mouthwatering photos of our dishes, we regularly share updates about events and promotions. We look forward to connecting with you on social media and keeping you in the loop about all things gericht.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {instaImg.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>

            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );


}


export default Gallery;
