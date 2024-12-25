import React from 'react';
import Slider from 'react-slick';
import styles from './CardsCarrousel.module.css';
import CreditCard from './CreditCardComponent/CreditCard';
import BottomDrawer from './Drawer/BottomDrawer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel-styles.css';

const sampleTextItems = [
  { id: '1', text: 'Sample Text 1' },
  { id: '2', text: 'Sample Text 2' },
  { id: '3', text: 'Sample Text 3' },
  { id: '4', text: 'Sample Text 4' },
  { id: '5', text: 'Sample Text 5' }
];

function CardsCarrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.father} id='father'>
      <div className={styles.header}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bolder', margin: '0 30px' }}>
          Sample Carousel
        </h2>
      </div>
      <Slider className={styles.carrousel} {...settings}>
        {sampleTextItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <p>{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardsCarrousel;
