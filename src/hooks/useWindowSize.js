import { useCallback, useEffect, useState } from 'react';
import { mediaNumber } from '../components/Common/media';

const useWindowSize = () => {
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth <= mediaNumber.mobile,
      isTablet: window.innerWidth > mediaNumber.mobile && window.innerWidth <= mediaNumber.tablet,
    };
  }, []);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
