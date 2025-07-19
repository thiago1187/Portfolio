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
      category: 'Frontend',
      icon: '🎨',
      items: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: '🔧',
      items: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 70 }
      ]
    },
    {
      category: 'Design & UX',
      icon: '✨',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animation', level: 75 },
        { name: 'Prototyping', level: 80 }
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

        {/* Additional Skills */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8">Outras Competências</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Metodologias Ágeis', 'Clean Code', 'TDD', 'API REST', 'GraphQL',
              'Microserviços', 'Performance Optimization', 'SEO', 'Accessibility',
              'Team Leadership', 'Code Review', 'Mentoring'
            ].map((skill, index) => (
              <div 
                key={skill}
                className={`glass px-4 py-2 rounded-full text-sm hover-scale transition-smooth ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-6 text-gradient">Aprendendo Agora</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Rust', icon: '🦀' },
              { name: 'WebAssembly', icon: '⚡' },
              { name: 'Machine Learning', icon: '🤖' },
              { name: 'Blockchain', icon: '⛓️' }
            ].map((item, index) => (
              <div 
                key={item.name}
                className={`glass p-4 rounded-lg hover-scale transition-smooth ${
                  isVisible ? 'animate-pulse-glow' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
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