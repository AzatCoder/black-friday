import { useEffect, useState } from 'react';

export const usePageLoading = () => {
  const [ isPageLoaded, setIsPageLoaded ] = useState(false);

  const onLoad = () => setIsPageLoaded(true);

  useEffect(() => {
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    return () => window.removeEventListener('load', onLoad);
  }, []);

  return { isPageLoaded };
}