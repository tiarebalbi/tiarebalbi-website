import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { BiBuilding, BiCurrentLocation, BiMailSend } from 'react-icons/bi';
import { ImWarning } from 'react-icons/im';

import Dots from '../components/assets/Dots';
import { useTitle } from '../lib/title';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>{useTitle('Home Page')}</title>
      </Head>
      <section className='container'>
        <div className={`row d-flex align-items-center justify-content-around ${styles.rowHeader}`}>
          <div className={`col-sm-12 col-md-6 mb-sm-5  ${styles.contentArea}`}>
            <h1 className={styles.title}>Hey there, I'm Tiarê</h1>
            <p className={styles.slogan}>
              Software Engineer that can be described as a serious enthusiast of technology, fortuned to work with one
              of my biggest passion, software development. Finding different ways to solve different problems.
            </p>
            <ul className={styles.items}>
              <li>
                <a>
                  <BiMailSend />
                  <span>me@tiarebalbi.com</span>
                </a>
              </li>
              <li>
                <a>
                  <BiCurrentLocation />
                  <span>Dublin, Ireland</span>
                </a>
              </li>
              <li>
                <a>
                  <BiBuilding />
                  <span>Software Engineer @ Workday</span>
                </a>
              </li>
            </ul>
            <p className={styles.disclaimer}>
              <ImWarning />
              Any idea or content shared in this website is on my own.
            </p>
          </div>
          <div className='col-sm-12 col-md-6 d-flex align-items-end justify-content-end'>
            <Image
              className={styles.profile}
              src="/images/profile-1.jpg"
              alt="Tiare Balbi"
              width={400}
              height={400}
            />
            <Dots c={styles.bottomRight} />
          </div>
        </div>
      </section>
    </div>
  );
}
