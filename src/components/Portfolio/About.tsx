import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Código limpo e eficiente usando as melhores práticas da indústria.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Interfaces modernas e intuitivas que encantam os usuários.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Aplicações rápidas e otimizadas para a melhor experiência.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação eficaz em projetos complexos.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. 
            Com mais de 3 anos de experiência, trabalho transformando ideias em realidade 
            através de código elegante e design pensado na experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gradient">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Comecei minha jornada na programação há alguns anos, fascinado pela capacidade 
                de criar experiências digitais que impactam a vida das pessoas. Desde então, 
                venho me especializando em tecnologias modernas como React, Node.js e TypeScript.
              </p>
              <p>
                Acredito que a combinação entre código limpo, design intuitivo e performance 
                otimizada é a chave para criar produtos digitais excepcionais. Cada projeto 
                é uma oportunidade de aprender algo novo e superar desafios técnicos.
              </p>
              <p>
                Quando não estou codando, gosto de estudar novas tecnologias, contribuir para 
                projetos open-source e compartilhar conhecimento com a comunidade dev.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`card-gradient border-border/50 hover-scale transition-smooth ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 glass rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {[
            { number: '50+', label: 'Projetos Concluídos' },
            { number: '3+', label: 'Anos de Experiência' },
            { number: '20+', label: 'Tecnologias' },
            { number: '100%', label: 'Comprometimento' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="text-3xl font-bold text-gradient">{stat.number}</h4>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;