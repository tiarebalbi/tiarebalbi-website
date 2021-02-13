import React from 'react';

import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

import styles from '../../styles/components/home/Blog.module.css';

const Blog = ({ posts }) => (
  <section id='blog' className='row mb-5'>
    <div className='col-12'>
      <h2>From my Blog</h2>
    </div>
    {posts && posts.map(post => (
      <div key={post.node?._meta?.uid} className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
        <div>
          <Image
            src={post.node.media?.url}
            layout='fill' />
        </div>
        <h3>{post.node.title[0].text}</h3>
        <a href={`/article/${post.node?._meta?.uid}`} aria-label={post.node.title[0].text}>
          <BsArrowRightShort />
          <span>Read More</span>
        </a>
      </div>
    ))}
  </section>
);

export default Blog;
