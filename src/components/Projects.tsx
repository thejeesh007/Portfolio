import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';
import project5 from '@/assets/project5.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Dress Fit-Style Sync',
      description: 'Users enter body measurements which dynamically scale a 3D avatar model to match their body shape. The app calculates if a dress fits you.The app renders the avatar and dress using react-three-fiber, allowing real-time viewing,. ',
      image: 'https://media.istockphoto.com/id/1332486777/photo/beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in.jpg?s=612x612&w=0&k=20&c=tr2LE0oDku-0v-i4W1I_yW4Czso3wCwoFjYqoMhoyP0=',
      technologies: ['React', 'Node.js', 'JavaScript', 'Blender'],
      githubUrl: 'https://github.com/thejeesh007/DressFit',
      liveUrl: 'https://myecommerce-demo.netlify.app',
      featured: true,
    },
    {
      title: 'Adaptive Video Streaming',
      description: 'Developed a Java-based adaptive video streaming system with a client-server-relay model.Used FFmpeg for frame-level resizing, ensuring low latency deliver.',
      image: 'https://imgs.search.brave.com/3NoQDclRlfAjisLoi7rlpcOaTAK75cnDoLATi5tnwKs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MzUzLzA0NS9zbWFs/bC9zdHJlYW1pbmct/b25saW5lLXdhdGNo/aW5nLXZpZGVvLW9u/LWludGVybmV0LWhv/bG9ncmFtLWNvbmNl/cHQtcGhvdG8uanBn',
      technologies: ['Java', 'Networking', 'Ffmpeg', 'Client-Server'],
      githubUrl: 'https://github.com/StrDracula/CN-Project',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.taskmanager',
      featured: false,
    },
    {
      title: 'StudySphere-Aid for Education',
      description: 'Built an AI-powered study assistant using HTML, CSS, JavaScript, and Together AI APIs.  summarization, flashcard generation, quiz creation, and interactive chatbot',
      image:'https://imgs.search.brave.com/5L-SAfv-BuRxjMnmo82HARRerIT7ReC4RqlYPhjbOBI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lcGUu/YnJpZ2h0c3BvdGNk/bi5jb20vZGltczQv/ZGVmYXVsdC84MzY0/MjFjLzIxNDc0ODM2/NDcvc3RyaXAvdHJ1/ZS9jcm9wLzE2OTV4/MTE1MCswKzAvcmVz/aXplLzg0MHg1NzAh/L3F1YWxpdHkvOTAv/P3VybD1odHRwczov/L2VwZS1icmlnaHRz/cG90LnMzLnVzLWVh/c3QtMS5hbWF6b25h/d3MuY29tLzhkL2Zi/LzNjOTU4YTM3NDU4/Yzk2YzhjOGQyOTYx/MDQzYzIvYWktY2hh/dGJvdC1jbGFzc3Jv/b20tMjE2MTYyNjI4/Mi1iLmpwZw',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TogetherAPI'],
      githubUrl: 'https://github.com/thejeesh007/StudySphere',
      liveUrl: 'https://bright-conkies-3c1d6b.netlify.app/',
      featured: true,
    },
    {
      title: 'VioraVisuals',
      description: 'Vioravisuals.com is a design-focused platform that showcases cutting-edge UI/UX work and creative digital solutions. It highlights modern, user-centric interfaces crafted with attention to detail and visual aesthetics.',
      image:project4,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'FireBase'],
      liveUrl: 'https://vioravisuals.com/',
      featured: true,
    },
    {
      title: 'Translator',
      description: 'This project is a multilingual voice translator that converts speech or text into translated audio across Indian languages. It uses speech recognition, LLaMA-3-based translation, and gTTS for seamless input-to-speech output.',
      image:'https://imgs.search.brave.com/D001mp2KN7rHDYYlG28nlQYgl-JV-dbRh3biAzB4epc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aWRl/b3RyYW5zbGF0b3Iu/YmxpcGN1dC5jb20v/aW1hZ2VzL2hvbWUv/bXVsdGlwbGUtbGFu/Z3VhZ2VzLnBuZw',
      technologies: ['Python', 'TogetherAi', 'NLTK','OpenAI'],
      githubUrl: 'https://github.com/Ramya1446/translator',
      liveUrl: 'https://ai-chatbot-demo.streamlit.app',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-primary-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and creativity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-card-gradient border-border/50 hover:shadow-primary transition-all duration-500 group overflow-hidden relative ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary-gradient text-white border-0">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      asChild
                      className="backdrop-blur-sm hover:scale-105 transition-transform"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      asChild
                      className="bg-primary-gradient hover:shadow-primary backdrop-blur-sm hover:scale-105 transition-transform"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1 border-primary/20 hover:bg-primary/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      asChild
                      className="flex-1 bg-primary-gradient hover:shadow-primary"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:shadow-primary transition-all duration-300 group"
              >
                <a href="https://github.com/thejeesh007" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View More on GitHub
                </a>
              </Button>
              <p className="text-muted-foreground text-sm">
                Check out my GitHub for more amazing projects and contributions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;