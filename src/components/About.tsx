import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Smartphone, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js, HTML',
    },
    {
      icon: Database,
      title: 'Programming Languages',
      description: 'C, C++, Java, JavaScript',
    },
    {
      icon: Smartphone,
      title: 'Generative AI',
      description: 'Together AI, NLTK, LangChain, Hugging Face, LLMs',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Python, TensorFlow, Data Science',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-primary-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate computer science student with a love for creating innovative solutions 
              and learning cutting-edge technologies.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="bg-card-gradient border-border/50 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am currently pursuing my B.Tech in Computer Science and Engineering at VIT Chennai. My academic journey emphasizes core areas such as Data Structures, Algorithms, Operating Systems, and Database Systems. Alongside strong theoretical foundations, I’ve actively applied my learning through projects in AI, Web Development, and System Design. VIT’s dynamic curriculum and hands-on approach have helped me stay industry-ready. I’ve also taken part in research, technical clubs, and hackathons to enhance my practical skills. This blend of academics and real-world exposure drives my passion for building innovative tech solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-border/50 hover:shadow-primary transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
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

export default About;