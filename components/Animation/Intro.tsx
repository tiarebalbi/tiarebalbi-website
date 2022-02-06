import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline()
      .delay(2) // 2 seconds
      .to(introRef.current, {
        top: '100vh',
        duration: 0.5,
        ease: 'power2.out',
      })
      .eventCallback('onComplete', () => {
        introRef.current?.remove();
      });
  }, []);

  return (
    <div className="tb-intro" ref={introRef}>
      <div className="w-[1384px]">
        <Player
          autoplay
          src="https://assets10.lottiefiles.com/packages/lf20_l4lkimob.json"
          style={{ height: '138px', width: '111px' }}
        />
      </div>
    </div>
  );
};

export default Intro;
