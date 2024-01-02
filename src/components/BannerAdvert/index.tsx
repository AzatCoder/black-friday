import { FC } from 'react';
import { IconButton } from '@components/ImageButton';
import closeImg from '@assets/close.svg';
import './styles.css';

interface BannerAdvertProps {
  onClose: () => void;
}

export const BannerAdvert: FC<BannerAdvertProps> = ({ onClose }) =>  (
  <section className='banner-advert__section'>
    <div className='banner-advert__content'>
      <h1>Black Friday</h1>
      <p className='banner-advert__discount'>10%OFF</p>
      <p className='dark-color'>
        Use code
        <span className='bright-color font-bold'> 10FRIDAY </span>
        at checkout
      </p>
      <button>Shop now <span className='mobile-unnecessary'>through Monday</span></button>
    </div>
    <IconButton onClick={onClose} src={closeImg} className='banner-advert__close' />
  </section>
);
