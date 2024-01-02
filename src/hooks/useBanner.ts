import { RefObject, useEffect, useState } from 'react';
import { bannerStorage } from '@storage';

export const useBanner = (headerAdvertRef: RefObject<HTMLElement>) => {
  const [ isBannerOpen, setIsBannerOpen ] = useState(false);

  const closeBanner = () => {
    setIsBannerOpen(false);
    bannerStorage.close();
  }

  const onScroll = () => {
    const rect = headerAdvertRef.current?.getBoundingClientRect();
    const isHeaderAdvertInvisible = (rect?.bottom as number) < 0;

    if (isHeaderAdvertInvisible) {
      setIsBannerOpen(true);
      unsubscribeScrollListener();
    }
  }

  const subscribeToScroll = () => window.addEventListener('scroll', onScroll);
  const unsubscribeScrollListener = () => window.removeEventListener('scroll', onScroll);

  useEffect(() => {
    if (!bannerStorage.isClosed()) subscribeToScroll();
    return unsubscribeScrollListener;
  }, []);

  return {
    isBannerOpen,
    closeBanner
  };
}
