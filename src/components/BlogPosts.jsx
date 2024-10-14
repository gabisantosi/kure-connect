import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchBlogPosts = async () => {
  // Simula uma chamada de API para buscar os posts
  // No futuro, isso pode ser substituído por uma chamada real à sua API
  return [
    {
      id: 1,
      title: "A Importância da Saúde Digital no Cuidado a Pacientes",
      content: "A saúde digital tem revolucionado a forma como os cuidados de saúde são prestados, melhorando significativamente a qualidade do atendimento ao paciente. Através de tecnologias como prontuários eletrônicos, telemedicina e dispositivos de monitoramento remoto, os profissionais de saúde podem oferecer um cuidado mais personalizado e eficiente. Isso não apenas aumenta a satisfação do paciente, mas também melhora os resultados clínicos e reduz os custos de saúde a longo prazo.",
      date: "2024-03-15",
      linkedinUrl: "https://www.linkedin.com/post/saude-digital-cuidado-pacientes"
    },
    {
      id: 2,
      title: "Health Startups nos Países Nórdicos: Um Modelo de Inovação",
      content: "Os países nórdicos têm se destacado como um hub de inovação para health startups. Com um forte foco em tecnologia, design centrado no usuário e sistemas de saúde públicos robustos, essas startups estão desenvolvendo soluções que abordam desafios globais de saúde. Desde plataformas de telemedicina até aplicativos de saúde mental, as startups nórdicas estão definindo novos padrões para o cuidado de saúde digital.",
      date: "2024-03-20",
      linkedinUrl: "https://www.linkedin.com/post/health-startups-paises-nordicos"
    },
    {
      id: 3,
      title: "Gestão de Projetos em Saúde Pública: Desafios e Oportunidades",
      content: "A gestão eficaz de projetos é crucial para o sucesso de iniciativas de saúde pública. Com recursos limitados e demandas crescentes, os gestores de saúde pública enfrentam desafios únicos. A aplicação de metodologias ágeis e ferramentas de gestão de projetos pode melhorar significativamente a eficiência e o impacto dessas iniciativas, desde campanhas de vacinação até programas de prevenção de doenças crônicas.",
      date: "2024-03-25",
      linkedinUrl: "https://www.linkedin.com/post/gestao-projetos-saude-publica"
    },
    {
      id: 4,
      title: "Inovações em Saúde Digital",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-03-10",
      linkedinUrl: "https://www.linkedin.com/post/inovacoes-saude-digital"
    },
    {
      id: 5,
      title: "O Futuro da Telemedicina",
      content: "Praesent in mauris eu tortor porttitor accumsan...",
      date: "2024-03-05",
      linkedinUrl: "https://www.linkedin.com/post/futuro-telemedicina"
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