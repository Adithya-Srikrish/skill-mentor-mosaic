import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, MessageSquare, Calendar, Filter, Star, Mail, Phone } from "lucide-react";

export const MyCandidates = () => {
  const candidates = [
    {
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      status: "Active Candidate",
      stage: "Interview Scheduled",
      lastContact: "2 days ago",
      avatar: "/placeholder.svg",
      skills: ["React", "Node.js", "TypeScript"],
      rating: 4.9,
      position: "Senior Frontend Developer",
      salary: "$130k",
      notes: "Strong technical background, excellent communication skills",
      nextAction: "Technical interview on March 25",
      contactInfo: {
        email: "sarah.chen@email.com",
        phone: "+1 (555) 123-4567"
      },
      timeline: [
        { date: "Mar 20", action: "Profile reviewed", status: "completed" },
        { date: "Mar 22", action: "Initial screening", status: "completed" },
        { date: "Mar 25", action: "Technical interview", status: "upcoming" },
        { date: "TBD", action: "Final interview", status: "pending" }
      ]
    },
    {
      name: "Michael Rodriguez",
      title: "ML Engineer",
      status: "Under Review",
      stage: "Application Review",
      lastContact: "5 days ago",
      avatar: "/placeholder.svg",
      skills: ["Python", "TensorFlow", "AWS"],
      rating: 4.8,
      position: "Machine Learning Engineer",
      salary: "$150k",
      notes: "PhD candidate with strong research background",
      nextAction: "Schedule screening call",
      contactInfo: {
        email: "m.rodriguez@email.com",
        phone: "+1 (555) 234-5678"
      },
      timeline: [
        { date: "Mar 18", action: "Application submitted", status: "completed" },
        { date: "Mar 19", action: "Profile reviewed", status: "completed" },
        { date: "TBD", action: "Initial screening", status: "pending" }
      ]
    },
    {
      name: "Emily Zhang",
      title: "UI/UX Designer",
      status: "Hired",
      stage: "Onboarding",
      lastContact: "1 day ago",
      avatar: "/placeholder.svg",
      skills: ["Figma", "React", "Design Systems"],
      rating: 4.7,
      position: "Senior UX Designer",
      salary: "$120k",
      notes: "Excellent portfolio, great cultural fit",
      nextAction: "Send onboarding materials",
      contactInfo: {
        email: "emily.zhang@email.com",
        phone: "+1 (555) 345-6789"
      },
      timeline: [
        { date: "Mar 10", action: "Application submitted", status: "completed" },
        { date: "Mar 12", action: "Portfolio review", status: "completed" },
        { date: "Mar 15", action: "Design challenge", status: "completed" },
        { date: "Mar 18", action: "Final interview", status: "completed" },
        { date: "Mar 20", action: "Offer accepted", status: "completed" }
      ]
    },
    {
      name: "David Kim",
      title: "DevOps Engineer",
      status: "Rejected",
      stage: "Not a fit",
      lastContact: "1 week ago",
      avatar: "/placeholder.svg",
      skills: ["AWS", "Docker", "Kubernetes"],
      rating: 4.5,
      position: "Senior DevOps Engineer",
      salary: "$140k",
      notes: "Strong technical skills but looking for different role scope",
      nextAction: "Archive profile",
      contactInfo: {
        email: "david.kim@email.com",
        phone: "+1 (555) 456-7890"
      },
      timeline: [
        { date: "Mar 8", action: "Application submitted", status: "completed" },
        { date: "Mar 10", action: "Initial screening", status: "completed" },
        { date: "Mar 12", action: "Technical interview", status: "completed" },
        { date: "Mar 14", action: "Feedback provided", status: "completed" }
      ]
    },
    {
      name: "Jessica Liu",
      title: "Data Scientist",
      status: "In Progress",
      stage: "Final Interview",
      lastContact: "3 days ago",
      avatar: "/placeholder.svg",
      skills: ["Python", "R", "Machine Learning"],
      rating: 4.6,
      position: "Senior Data Scientist",
      salary: "$135k",
      notes: "Strong analytical skills, Harvard background",
      nextAction: "Final interview with VP of Data",
      contactInfo: {
        email: "jessica.liu@email.com",
        phone: "+1 (555) 567-8901"
      },
      timeline: [
        { date: "Mar 15", action: "Application submitted", status: "completed" },
        { date: "Mar 17", action: "Initial screening", status: "completed" },
        { date: "Mar 20", action: "Technical assessment", status: "completed" },
        { date: "Mar 26", action: "Final interview", status: "upcoming" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active Candidate': return 'default';
      case 'Under Review': return 'secondary';
      case 'Hired': return 'default';
      case 'In Progress': return 'default';
      case 'Rejected': return 'outline';
      default: return 'outline';
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Interview Scheduled': return 'default';
      case 'Application Review': return 'secondary';
      case 'Onboarding': return 'default';
      case 'Final Interview': return 'default';
      case 'Not a fit': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout userRole="recruiter">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Candidates</h1>
            <p className="text-muted-foreground mt-2">
              Manage your candidate pipeline and track progress
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="hero">
              <Users className="h-4 w-4 mr-2" />
              Add Candidate
            </Button>
          </div>
        </div>

        {/* Pipeline Stats */}
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold">18</h3>
              <p className="text-sm text-muted-foreground">Total Candidates</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary">5</h3>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary">8</h3>
              <p className="text-sm text-muted-foreground">In Process</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-success">3</h3>
              <p className="text-sm text-muted-foreground">Hired</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-muted-foreground">2</h3>
              <p className="text-sm text-muted-foreground">Archived</p>
            </div>
          </Card>
        </div>

        {/* Filter Tabs */}
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm">All Candidates</Button>
            <Button variant="outline" size="sm">Active (5)</Button>
            <Button variant="outline" size="sm">Interview Stage (3)</Button>
            <Button variant="outline" size="sm">Final Review (2)</Button>
            <Button variant="outline" size="sm">Hired (3)</Button>
            <Button variant="outline" size="sm">Archived (5)</Button>
          </div>
        </Card>

        {/* Candidates List */}
        <div className="space-y-6">
          {candidates.map((candidate, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-6">
                {/* Avatar and Basic Info */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{candidate.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{candidate.title}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getStatusColor(candidate.status)}>
                        {candidate.status}
                      </Badge>
                      <Badge variant={getStageColor(candidate.stage)}>
                        {candidate.stage}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warning fill-warning" />
                      <span className="text-sm font-medium">{candidate.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Position Details */}
                    <div>
                      <h5 className="font-medium text-sm mb-2">Position & Compensation</h5>
                      <p className="text-sm mb-1"><strong>Role:</strong> {candidate.position}</p>
                      <p className="text-sm mb-1"><strong>Salary:</strong> {candidate.salary}</p>
                      <p className="text-sm mb-3"><strong>Last Contact:</strong> {candidate.lastContact}</p>
                      
                      <h5 className="font-medium text-sm mb-2">Skills</h5>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {candidate.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Notes */}
                    <div>
                      <h5 className="font-medium text-sm mb-2">Progress Timeline</h5>
                      <div className="space-y-2 mb-4">
                        {candidate.timeline.slice(-3).map((item, timeIndex) => (
                          <div key={timeIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              item.status === 'completed' ? 'bg-success' :
                              item.status === 'upcoming' ? 'bg-primary' :
                              'bg-muted-foreground'
                            }`}></div>
                            <div className="flex-1">
                              <p className="text-xs font-medium">{item.action}</p>
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h5 className="font-medium text-sm mb-2">Notes</h5>
                      <p className="text-xs text-muted-foreground mb-3">{candidate.notes}</p>
                      
                      <h5 className="font-medium text-sm mb-2">Next Action</h5>
                      <p className="text-xs font-medium text-primary">{candidate.nextAction}</p>
                    </div>
                  </div>

                  {/* Contact & Actions */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{candidate.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{candidate.contactInfo.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                      <Button size="sm" variant="hero">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Pipeline Management</h3>
              <p className="text-sm text-muted-foreground">Keep your recruitment process organized</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Calendar className="h-5 w-5 mb-2" />
              <span className="font-medium">Schedule Interviews</span>
              <span className="text-xs text-muted-foreground">Coordinate with candidates</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <MessageSquare className="h-5 w-5 mb-2" />
              <span className="font-medium">Send Updates</span>
              <span className="text-xs text-muted-foreground">Keep candidates informed</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Users className="h-5 w-5 mb-2" />
              <span className="font-medium">Team Feedback</span>
              <span className="text-xs text-muted-foreground">Collect interview notes</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Filter className="h-5 w-5 mb-2" />
              <span className="font-medium">Pipeline Reports</span>
              <span className="text-xs text-muted-foreground">Track hiring metrics</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};