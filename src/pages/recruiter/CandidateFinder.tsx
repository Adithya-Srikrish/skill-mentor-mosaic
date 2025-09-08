import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Filter, MapPin, Star, Code, Briefcase, GraduationCap } from "lucide-react";

export const CandidateFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const candidates = [
    {
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      location: "San Francisco, CA",
      experience: "3 years",
      education: "BS Computer Science, Stanford",
      skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
      rating: 4.9,
      avatar: "/placeholder.svg",
      projects: 12,
      githubStars: 847,
      lastActive: "2 hours ago",
      status: "Open to work",
      salary: "$120k - $150k",
      remote: true,
      about: "Passionate full-stack developer with expertise in modern web technologies and cloud architecture.",
      achievements: ["Top 1% GitHub contributor", "React Conference Speaker", "Open Source Maintainer"]
    },
    {
      name: "Michael Rodriguez",
      title: "Machine Learning Engineer",
      location: "New York, NY",
      experience: "5 years",
      education: "MS AI, MIT",
      skills: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes"],
      rating: 4.8,
      avatar: "/placeholder.svg",
      projects: 8,
      githubStars: 1200,
      lastActive: "1 day ago",
      status: "Available",
      salary: "$140k - $180k",
      remote: true,
      about: "AI researcher turned engineer, specializing in computer vision and natural language processing.",
      achievements: ["PhD candidate", "AI research papers", "Tech conference speaker"]
    },
    {
      name: "Emily Zhang",
      title: "UI/UX Designer & Frontend Developer",
      location: "Seattle, WA",
      experience: "4 years",
      education: "BFA Design, RISD",
      skills: ["Figma", "React", "CSS3", "JavaScript", "Design Systems"],
      rating: 4.7,
      avatar: "/placeholder.svg",
      projects: 15,
      githubStars: 523,
      lastActive: "5 hours ago",
      status: "Open to work",
      salary: "$100k - $130k",
      remote: false,
      about: "Creative designer with strong frontend development skills, focused on user-centered design.",
      achievements: ["Design award winner", "Design system creator", "Mentorship program lead"]
    },
    {
      name: "David Kim",
      title: "DevOps Engineer",
      location: "Austin, TX",
      experience: "6 years",
      education: "BS Software Engineering, UT Austin",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      rating: 4.9,
      avatar: "/placeholder.svg",
      projects: 10,
      githubStars: 934,
      lastActive: "30 minutes ago",
      status: "Interested in new opportunities",
      salary: "$130k - $160k",
      remote: true,
      about: "Infrastructure expert with a passion for automation and scalable cloud solutions.",
      achievements: ["AWS certified", "Infrastructure automation", "Team leadership"]
    },
    {
      name: "Jessica Liu",
      title: "Data Scientist",
      location: "Boston, MA",
      experience: "3 years",
      education: "MS Statistics, Harvard",
      skills: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
      rating: 4.6,
      avatar: "/placeholder.svg",
      projects: 7,
      githubStars: 445,
      lastActive: "1 hour ago",
      status: "Available",
      salary: "$110k - $140k",
      remote: true,
      about: "Data scientist with strong statistical background and business acumen.",
      achievements: ["Data science competition winner", "Research publications", "Analytics team lead"]
    },
    {
      name: "Alex Thompson",
      title: "Mobile App Developer",
      location: "Los Angeles, CA",
      experience: "4 years",
      education: "BS Computer Science, UCLA",
      skills: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"],
      rating: 4.8,
      avatar: "/placeholder.svg",
      projects: 9,
      githubStars: 672,
      lastActive: "3 hours ago",
      status: "Open to work",
      salary: "$115k - $145k",
      remote: false,
      about: "Mobile development specialist with experience in both native and cross-platform apps.",
      achievements: ["App Store featured apps", "Mobile architecture expert", "Team mentor"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open to work': return 'default';
      case 'Available': return 'default';
      case 'Interested in new opportunities': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout userRole="recruiter">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Find Candidates</h1>
            <p className="text-muted-foreground mt-2">
              Discover talented developers and connect with top performers
            </p>
          </div>
          <Button variant="hero">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by skills, location, or experience..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Search</Button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Skills</label>
              <div className="flex flex-wrap gap-1">
                <Button variant="outline" size="sm">React</Button>
                <Button variant="outline" size="sm">Python</Button>
                <Button variant="outline" size="sm">AWS</Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Experience</label>
              <div className="flex flex-wrap gap-1">
                <Button variant="outline" size="sm">0-2 years</Button>
                <Button variant="outline" size="sm">3-5 years</Button>
                <Button variant="outline" size="sm">5+ years</Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <div className="flex flex-wrap gap-1">
                <Button variant="outline" size="sm">Remote</Button>
                <Button variant="outline" size="sm">US</Button>
                <Button variant="outline" size="sm">Global</Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Availability</label>
              <div className="flex flex-wrap gap-1">
                <Button variant="outline" size="sm">Open to work</Button>
                <Button variant="outline" size="sm">Available</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Search Results</h2>
            <p className="text-muted-foreground">Found {candidates.length} candidates matching your criteria</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Sort by Relevance</Button>
            <Button variant="outline" size="sm">Sort by Rating</Button>
            <Button variant="outline" size="sm">Sort by Experience</Button>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {candidates.map((candidate, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={candidate.avatar} />
                  <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{candidate.name}</h3>
                      <p className="text-muted-foreground text-sm">{candidate.title}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warning fill-warning" />
                      <span className="text-sm font-medium">{candidate.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{candidate.location}</span>
                      {candidate.remote && <Badge variant="secondary" className="text-xs ml-1">Remote OK</Badge>}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      <span>{candidate.experience}</span>
                    </div>
                  </div>
                  
                  <Badge variant={getStatusColor(candidate.status)} className="text-xs">
                    {candidate.status}
                  </Badge>
                </div>
              </div>

              {/* About */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {candidate.about}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-2">Skills</h5>
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.slice(0, 6).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {candidate.skills.length > 6 && (
                    <Badge variant="outline" className="text-xs">
                      +{candidate.skills.length - 6}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Code className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{candidate.projects}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{candidate.githubStars}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">GitHub Stars</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <GraduationCap className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm font-medium">{candidate.education.split(',')[0]}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Education</p>
                </div>
              </div>

              {/* Salary & Last Active */}
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="font-medium text-primary">{candidate.salary}</span>
                <span className="text-muted-foreground">Active {candidate.lastActive}</span>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-2">Key Achievements</h5>
                <div className="space-y-1">
                  {candidate.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="hero" className="flex-1">View Full Profile</Button>
                <Button variant="outline">Contact</Button>
                <Button variant="outline">Save</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Candidates
          </Button>
        </div>

        {/* Search Tips */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Search Tips</h3>
              <p className="text-sm text-muted-foreground">Get better results with these strategies</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Use Specific Skills</h4>
              <p className="text-sm text-muted-foreground">Search for specific technologies like "React", "Node.js", or "AWS"</p>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Filter by Experience</h4>
              <p className="text-sm text-muted-foreground">Narrow down by years of experience to find the right level</p>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Consider Remote Workers</h4>
              <p className="text-sm text-muted-foreground">Expand your talent pool by including remote candidates</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};