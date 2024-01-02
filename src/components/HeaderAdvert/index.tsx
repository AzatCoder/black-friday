import { HTMLProps, forwardRef } from 'react';
import { IconButton } from '@components/ImageButton';
import closeImg from '@assets/close.svg';
import rightArrowImg from '@assets/right-arrow.svg';
import prizeImg from '@assets/prize.png';
import './styles.css';

interface HeaderAdvertProps extends HTMLProps<HTMLElement> {
  onClose?: () => void;
}

export const HeaderAdvert = forwardRef<
  HTMLElement,
  HeaderAdvertProps
>(({ onClose, ...props }, ref) => (
  <section ref={ref} className='header-advert__section' {...props}>
    <span className='header-advert__shine tablet-unnecessary' />
    <div className='header-advert__icon'>
      <img src={prizeImg} />
    </div>
    <div className='header-advert__content'>
      <p className='header-advert__black-friday font-bold'>
        Black Friday
        <span className='tablet-unnecessary font-thin'>, 24-27 Nov</span>
      </p>
      <span className='header-advert__divider mobile-unnecessary' />
      <p className='bright-color font-bold'>10%OFF</p>
      <span className='header-advert__divider mobile-unnecessary' />
      <p className='mobile-unnecessary font-thin'>
        Use code <span className='bright-color font-bold'>10FRIDAY</span> <span className='tablet-unnecessary font-thin'>at checkout</span>
      </p>
    </div>
    <div className='header-advert__buttons'>
      <button className='header-advert__shop mobile-unnecessary'><span>Shop now</span></button>
      <IconButton src={closeImg} onClick={onClose} className='header-advert__close tablet-unnecessary' />
      <IconButton src={rightArrowImg} className='header-advert__next' />
    </div>
  </section>
));
