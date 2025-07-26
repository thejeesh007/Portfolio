import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Research Intern',
      company: 'VIT, Chennai',
      duration: 'May 2025 - Present',
      location: 'Chennai, India',
      description: [
        'Designed an AI-powered student feedback system using LLMs, generating over 50 context-aware responses per session without numerical input',
        'Worked as a Knowledge Orchestrator and guided my team throughout the project',
        'Boosted the quality of responses through iterative prompt engineering to align with academic tone and institutional goals',
      ],
      technologies: ['LLM', 'Python', 'OpenAI', 'Together AI', 'LangChain', 'REST APIs'],
    },
    {
      title: 'UIUX Designer',
      company: 'Ispace-VIT, Chennai',
      duration: 'August 2024 - Present',
      location: 'Chennai, India',
      description: [
        'I am an active member of the iSpace Club at VIT Chennai, where I contributed as a UI/UX Designer.',
        'I worked on designing user-centric interfaces for multiple internal tools and event platforms.',
        'My role involved wireframing, prototyping, and ensuring design consistency across web and mobile applications. Beyond design, I played a key role in organizing and conducting several technical and creative events, collaborating with cross-functional teams to ensure smooth execution.',
      ],
      technologies: ['Figma', 'Adobe',],
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-primary-gradient bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional experience that has shaped my development skills and industry knowledge.
            </p>
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-card-gradient border-border/50 hover:shadow-primary transition-all duration-300 mb-10"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-lg font-semibold text-primary">
                      <Building className="h-5 w-5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Looking for new opportunities to grow and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
