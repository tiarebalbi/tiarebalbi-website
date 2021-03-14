import React from 'react';
import styles from '../styles/components/home/Blog.module.css';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';

const BlogCard = ({ uid, title, date, url }) => (
  <div className={`col-12 col-sm-6 col-md-4 ${styles.post}`} key={uid}>
    <div>
      <Image layout="fill" objectFit="cover" objectPosition="50% 50%" quality={100} src={url} />
    </div>
    <h3 className={styles.titleCard}>
{title}
</h3>
    {date && <p className={styles.dateCard}>
{date}
</p>}
    <a aria-label={title} href={`/article/${uid}`}>
      <BsArrowRightShort />
      <span>
Read More
</span>
    </a>
  </div>
);

export default BlogCard;
