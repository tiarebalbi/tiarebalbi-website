import React from 'react';

import BlogCard from '../BlogCard';

const Blog = ({ posts }) => (
  <section className="row mb-5" id="blog">
    <div className="col-12 mb-5 mt-5">
      <h2>From my Blog</h2>
    </div>
    {posts &&
      posts.map((post) => (
        <BlogCard
          date={post.node.created_date}
          key={post.node?._meta?.uid}
          title={post.node.title[0].text}
          uid={post.node?._meta?.uid}
          url={post.node.media?.url}
        />
      ))}
  </section>
);

export default Blog;
