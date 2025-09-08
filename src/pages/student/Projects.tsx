import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Code, Plus, Github, ExternalLink, Calendar, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "Full-stack React application with TypeScript and Node.js backend",
      status: "In Progress",
      progress: 75,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/user/ecommerce-dashboard",
      liveUrl: "https://ecommerce-demo.com",
      image: "/placeholder.svg",
      lastUpdated: "2 days ago"
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot using OpenAI API and React frontend",
      status: "Completed",
      progress: 100,
      technologies: ["React", "OpenAI API", "Python", "Flask"],
      githubUrl: "https://github.com/user/ai-chatbot",
      liveUrl: "https://chatbot-demo.com",
      image: "/placeholder.svg",
      lastUpdated: "1 week ago"
    },
    {
      title: "Weather App",
      description: "Modern weather application with geolocation and forecasts",
      status: "Completed",
      progress: 100,
      technologies: ["Vue.js", "Weather API", "CSS3"],
      githubUrl: "https://github.com/user/weather-app",
      liveUrl: "https://weather-demo.com",
      image: "/placeholder.svg",
      lastUpdated: "2 weeks ago"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management with real-time updates",
      status: "Planning",
      progress: 15,
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      githubUrl: "",
      liveUrl: "",
      image: "/placeholder.svg",
      lastUpdated: "3 days ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'secondary';
      case 'Planning': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Projects</h1>
            <p className="text-muted-foreground mt-2">
              Showcase your skills through practical projects
            </p>
          </div>
          <Button variant="hero">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Github className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">156</h3>
                <p className="text-sm text-muted-foreground">GitHub Stars</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">24</h3>
                <p className="text-sm text-muted-foreground">Live Demos</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Code className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Progress */}
                {project.status !== 'Completed' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                )}
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" variant="hero" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <Button size="sm" variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Plan Project
                    </Button>
                  )}
                </div>
                
                {/* Last Updated */}
                <p className="text-xs text-muted-foreground mt-3">
                  Updated {project.lastUpdated}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Ideas Section */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Project Ideas for You</h2>
              <p className="text-muted-foreground text-sm">Based on your skills and interests</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Personal Portfolio</h4>
              <p className="text-sm text-muted-foreground mb-3">Showcase your work with a modern portfolio website</p>
              <div className="flex gap-1 mb-3">
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">CSS3</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full">Start Building</Button>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Recipe Finder App</h4>
              <p className="text-sm text-muted-foreground mb-3">Build a recipe app with API integration</p>
              <div className="flex gap-1 mb-3">
                <Badge variant="outline" className="text-xs">Vue.js</Badge>
                <Badge variant="outline" className="text-xs">API</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full">Start Building</Button>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Expense Tracker</h4>
              <p className="text-sm text-muted-foreground mb-3">Create a full-stack expense management app</p>
              <div className="flex gap-1 mb-3">
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">Database</Badge>
              </div>
              <Button size="sm" variant="outline" className="w-full">Start Building</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};