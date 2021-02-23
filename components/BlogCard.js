import React from "react";
import styles from "../styles/components/home/Blog.module.css";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const BlogCard = ({ uid, title, url }) => (
  <div key={uid} className={`col-12 col-sm-6 col-md-4 ${styles.post}`}>
    <div>
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        quality={100}
      />
    </div>
    <h3>{title}</h3>
    <a href={`/article/${uid}`} aria-label={title}>
      <BsArrowRightShort />
      <span>Read More</span>
    </a>
  </div>
);

export default BlogCard;
