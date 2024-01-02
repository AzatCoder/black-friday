import { useRef } from 'react';
import { HeaderAdvert } from '@components/HeaderAdvert';
import { BannerAdvert } from '@components/BannerAdvert';
import { useBanner, usePageLoading } from '@hooks';
import './App.css';

function App() {
  const headerAdvertRef = useRef<HTMLElement>(null);
  const { isBannerOpen, closeBanner } = useBanner(headerAdvertRef);
  const { isPageLoaded } = usePageLoading();

  return (
    <div className='main'>
      <HeaderAdvert ref={headerAdvertRef} />
      {isBannerOpen && isPageLoaded && (
        <div className='main__banner_advert'>
          <BannerAdvert onClose={closeBanner} />
        </div>
      )}
    </div>
  );
}

export default App;
