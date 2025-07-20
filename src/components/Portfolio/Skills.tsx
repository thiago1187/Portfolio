import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            const newValues: { [key: string]: number } = {};
            skills.forEach(category => {
              category.items.forEach(skill => {
                newValues[skill.name] = skill.level;
              });
            });
            setProgressValues(newValues);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Linguagens',
      icon: '💻',
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 90 },
        { name: 'C', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 95 }
      ]
    },
    {
      category: 'Frameworks',
      icon: '⚙️',
      items: [
        { name: 'React', level: 80 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Django', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'shadcn/ui', level: 80 }
      ]
    },
    {
      category: 'Ferramentas',
      icon: '🧪',
      items: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vite', level: 75 },
        { name: 'Arduino', level: 70 },
        { name: 'Construct', level: 65 },
        { name: 'Figma', level: 40 },
        { name: 'Postman', level: 40 }
      ]
    },
    {
      category: 'Bancos de Dados',
      icon: '🗄️',
      items: [
        { name: 'MySQL', level: 40 },
        { name: 'SQLite', level: 40 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar experiências digitais 
            excepcionais e soluções inovadoras.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <Card 
              key={category.category}
              className={`card-gradient border-border/50 hover-scale transition-smooth ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gradient">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {progressValues[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={progressValues[skill.name] || 0} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-6 text-gradient">🎯 Foco atual de estudo</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Desenvolvimento Fullstack', icon: '💻' },
              { name: 'Machine Learning', icon: '🤖' },
              { name: 'Ciência de Dados', icon: '📊' }
            ].map((item, index) => (
              <div 
                key={item.name}
                className={`glass p-6 rounded-lg hover-scale transition-smooth text-center ${
                  isVisible ? 'animate-pulse-glow' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-sm font-medium">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;