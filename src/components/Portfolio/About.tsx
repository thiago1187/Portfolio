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
            Estudante na Cesar School, apaixonado por tecnologia, esportes e viagens. 
            Desenvolvedor com experiência em diversas tecnologias, sempre em busca de 
            crescimento e novos desafios que me permitam criar soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gradient">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Desde pequeno, sempre fui movido por competição e estratégia. Já participei e até 
                ganhei dinheiro jogando games competitivos, onde desenvolvi foco, tomada de decisão 
                rápida e trabalho em equipe - soft skills essenciais no mundo da tecnologia.
              </p>
              <p>
                Minha jornada como desenvolvedor envolve experiências com JavaScript, Python (Django), 
                Java (Spring Boot), C, HTML, CSS e Arduino. Já criei desde jogos 2D e sistemas com 
                interface moderna, até aplicações em terminal e projetos físicos.
              </p>
              <p>
                Atualmente me aprofundo em ciência de dados e machine learning. Tenho o sonho de 
                viajar o mundo e usar a tecnologia como ponte entre ideias e impacto real, construindo 
                coisas úteis, criativas e ousadas.
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
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {[
            { number: '6+', label: 'Projetos Concluídos' },
            { number: '1+', label: 'Ano de Experiência' },
            { number: '15+', label: 'Tecnologias' },
            { number: '100%', label: 'Comprometimento' }
          ].slice(0, 3).map((stat, index) => (
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