import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchBlogPosts = async () => {
  // Simula uma chamada de API para buscar os posts
  // No futuro, isso pode ser substituído por uma chamada real à sua API
  return [
    {
      id: 1,
      title: "Inovações em Saúde Digital",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2023-05-15",
      linkedinUrl: "https://www.linkedin.com/post/example1"
    },
    {
      id: 2,
      title: "O Futuro da Telemedicina",
      content: "Praesent in mauris eu tortor porttitor accumsan...",
      date: "2023-05-20",
      linkedinUrl: "https://www.linkedin.com/post/example2"
    }
  ];
};

const BlogPosts = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) return <div>Carregando posts...</div>;
  if (error) return <div>Erro ao carregar os posts: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Blog da Kure Saúde</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <a 
                href={post.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ver no LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;