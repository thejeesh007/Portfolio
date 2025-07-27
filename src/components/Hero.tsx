import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import avatar from '@/assets/avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy resume PDF URL - in production, this would be your actual resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1hJPskEFPIwcCzz-tsRrNI9GkLR5sGBN9/view?usp=sharing'; // You'll need to add your actual resume PDF to the public folder
    link.download = 'Thejeesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-gradient opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-gradient opacity-30 rounded-full blur-2xl animate-float" style={{ animationDelay: '-6s' }} />
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <br></br>
              <br></br>
              <img 
                src={avatar} 
                alt="Thejeesh" 
                className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-primary relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-primary-gradient opacity-20 blur-md animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="inline-flex items-center gap-3">
                Hi, I'm{' '}
                <span className="bg-primary-gradient bg-clip-text text-transparent relative">
                  Thejeesh
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-primary animate-pulse" />
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              3rd Year Computer Science Engineering Student passionate about building 
              <span className="text-primary font-semibold"> innovative solutions</span> and creating 
              <span className="text-primary font-semibold"> impactful technology</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary-gradient hover:shadow-primary transition-all duration-300 transform hover:scale-105 group"
              >
                <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View My Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={downloadResume}
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:shadow-primary transition-all duration-300 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/thejeesh007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/50 hover:bg-primary hover:shadow-primary transition-all duration-300 group backdrop-blur-sm border border-primary/20"
              >
                <Github className="h-6 w-6 group-hover:text-primary-foreground group-hover:scale-110 transition-all" />
              </a>
              <a 
                href="https://www.linkedin.com/in/thejeesh-g-a53a40337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-muted/50 hover:bg-secondary-gradient hover:shadow-secondary transition-all duration-300 group backdrop-blur-sm border border-primary/20"
              >
                <Linkedin className="h-6 w-6 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;