import React from 'react';

import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

import styles from '../../styles/components/home/Blog.module.css';

const Blog = () => (
  <section id='blog' className="row mb-5">
    <div className="col-12">
      <h2>From my Blog</h2>
    </div>
    <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
      <div>
        <Image src="https://images.unsplash.com/photo-1612356938318-2547ac2c7f2b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" layout="fill" />
      </div>
      <h3>The ultimate guide to product marketing 2019</h3>
      <a href="/link-3" aria-label="Read more about The ultimate guide 2020">
        <BsArrowRightShort />
        <span>Read More</span>
      </a>
    </div>
    <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
      <div>
        <Image src="https://images.unsplash.com/photo-1612356938318-2547ac2c7f2b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" layout="fill" />
      </div>
      <h3>The ultimate guide to product marketing 2019</h3>
      <a href="/link-2" aria-label="Read more about The ultimate guide 2021">
        <BsArrowRightShort />
        <span>Read More</span>
      </a>
    </div>
    <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
      <div>
        <Image src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" layout="fill" />
      </div>
      <h3>The ultimate guide to product marketing 2019</h3>
      <a href="/link-1" aria-label="Read more about The ultimate guide 2019">
        <BsArrowRightShort />
        <span>Read More</span>
      </a>
    </div>
  </section>
);

export default Blog;
