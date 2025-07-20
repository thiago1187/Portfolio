import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'ScoutMatch',
      description: 'Sistema fullstack que cruza dados de jogadores com os requisitos de clubes (posição, perna dominante, estilo de jogo, idade, etc.), exibindo o nível de compatibilidade em uma interface moderna e interativa.',
      image: '/placeholder.svg',
      tags: ['Spring Boot', 'React', 'Tailwind CSS', 'shadcn/ui'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thiago1187/ScoutMatch',
      featured: true
    },
    {
      id: 2,
      title: 'FutHub – Organizador de Peladas',
      description: 'CRUD em terminal para gerenciar peladas. Organiza dados de jogadores, datas e performances. Foi um dos projetos em que mais desenvolvi minha lógica de programação e manipulação de arquivos.',
      image: '/placeholder.svg',
      tags: ['Python', 'Django', 'CSS', 'JavaScript', 'HTML'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thiago1187/FutHub_PROJETO_FDS',
      featured: true
    },
    {
      id: 3,
      title: 'Quiz Recife (Totem com Arduino)',
      description: 'Totem físico interativo com botões, funcionando como quiz cultural sobre a cidade de Recife. Projeto que uniu software e hardware, com foco em interatividade e impacto local.',
      image: '/placeholder.svg',
      tags: ['Arduino', 'C/C++', 'Hardware'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thiago1187/G10---Reciquiz',
      featured: false
    },
    {
      id: 4,
      title: 'Jogo 2D no Construct',
      description: 'Jogo multiplayer local onde dois personagens duelam em um ambiente 2D com física simples. Inicialmente inspirado no estilo cooperativo de Fogo e Água, acabou virando um duelo competitivo tipo Brawlhalla.',
      image: '/placeholder.svg',
      tags: ['Construct', 'Game Design'],
      liveUrl: '#',
      githubUrl: null,
      featured: false
    },
    {
      id: 5,
      title: 'Air Hockey em C',
      description: 'Jogo de Air Hockey simples jogado no terminal, com movimentação, lógica de colisão e placar. Foco em lógica, vetores e manipulação de interface textual. Ótimo exercício de C puro.',
      image: '/placeholder.svg',
      tags: ['C', 'Terminal', 'Game Logic'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thiago1187/Air-Hockey',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes 
            habilidades e tecnologias que domino.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-gradient ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`card-gradient border-border/50 hover-scale transition-smooth overflow-hidden group ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="glass">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary" className="glass">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="glass">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </Button>
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-gradient ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`card-gradient border-border/50 hover-scale transition-smooth group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <div className="flex space-x-2">
                      {project.liveUrl !== '#' && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs glass">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
