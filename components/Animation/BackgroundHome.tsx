import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import { gsap } from 'gsap';

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) => {
  return `translate3d(${x * 0.015}px,${y * 0.015}px,0)`;
};

const BackgroundHome = () => {
  // Parallax
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  // Animation
  const cloud1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(cloud1Ref.current, {
        left: '100vw',
        duration: 35,
        ease: 'slow',
      })
      .repeat(-1);
  }, []);

  return (
    <div
      className="tb-background-home"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="tb-background-cards">
        <animated.img
          className="card1"
          src="/images/bottom-background.png"
          style={{ transform: props.xy.to(trans1) }}
        />
      </div>
      <div className="tb-background-clouds">
        <div ref={cloud1Ref}>
          <Image src="/images/cloud-1.png" layout="fill" alt="Cloud" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundHome;
