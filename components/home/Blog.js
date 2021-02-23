import React from "react";

import BlogCard from "../BlogCard";

const Blog = ({ posts }) => (
  <section id="blog" className="row mb-5">
    <div className="col-12 mb-5 mt-5">
      <h2>From my Blog</h2>
    </div>
    {posts &&
      posts.map((post) => (
        <BlogCard
          key={post.node?._meta?.uid}
          title={post.node.title[0].text}
          url={post.node.media?.url}
          uid={post.node?._meta?.uid}
        />
      ))}
  </section>
);

export default Blog;
