import React from 'react';
import BlogPosts from '../components/BlogPosts';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog da Kure Saúde</h1>
      <BlogPosts />
    </div>
  );
};

export default Blog;