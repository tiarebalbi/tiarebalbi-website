import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Logo from '@public/images/logo.svg';

const SideNav = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline()
      .from(logoRef.current, {
        marginLeft: '-260px',
      })
      .delay(2.3)
      .to(logoRef.current, {
        marginLeft: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
  }, []);

  return (
    <aside>
      <div ref={logoRef} className="logo">
        <Logo width={60} height={48} alt="Tiarê Balbi Bonamini" />
      </div>
    </aside>
  );
};

export default SideNav;
