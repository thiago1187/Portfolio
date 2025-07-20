import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Instagram, MessageCircle } from 'lucide-react';
import heroAvatar from '@/assets/thiago-avatar.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/thiago1187', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/thiago-alves-computação/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thiagoalves_11/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:thiago.amacena2@hotmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <div className="absolute inset-0 bg-background/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 hero-gradient rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 hero-gradient rounded-full opacity-5 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">Olá, eu sou</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">Thiago</span>
                <br />
                <span className="text-foreground">Alves Macena</span>
              </h1>
              <p className="text-lg text-primary font-medium mb-4">Estudante na Cesar School</p>
              <p className="text-xl text-muted-foreground max-w-lg">
                Apaixonado por tecnologia, esportes e viagens. Desenvolvedor com experiência em JavaScript, Python, Java, 
                C e muito mais. Movido pela busca de liberdade, crescimento e propósito.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="hero-shadow hover-scale bg-primary hover:bg-primary/90"
                size="lg"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover-scale border-primary/50 hover:border-primary"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover-scale hover-glow transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden hero-shadow animate-float">
                <img 
                  src={heroAvatar} 
                  alt="Portfolio Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;