import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Target, Plus, Users, TrendingUp, Calendar, DollarSign, Eye, Edit } from "lucide-react";

export const Campaigns = () => {
  const campaigns = [
    {
      title: "Frontend Developers Q1 2024",
      status: "Active",
      created: "Feb 1, 2024",
      budget: "$25,000",
      positions: 5,
      applications: 127,
      interviews: 23,
      hires: 2,
      responseRate: "85%",
      avgTimeToHire: "18 days",
      description: "Seeking experienced React developers for our expanding product team",
      requirements: ["3+ years React", "TypeScript", "Modern CSS", "Team collaboration"],
      channels: ["LinkedIn", "Indeed", "AngelList", "Company Website"],
      progress: 60,
      deadline: "March 31, 2024",
      targetCandidates: 150,
      costPerHire: "$2,500"
    },
    {
      title: "AI/ML Engineers",
      status: "Draft",
      created: "Feb 20, 2024",
      budget: "$40,000",
      positions: 3,
      applications: 0,
      interviews: 0,
      hires: 0,
      responseRate: "N/A",
      avgTimeToHire: "N/A",
      description: "Building our AI team with experienced machine learning engineers",
      requirements: ["PhD/MS in ML", "Python/PyTorch", "Research experience", "MLOps"],
      channels: ["Academic networks", "AI conferences", "GitHub", "Research communities"],
      progress: 25,
      deadline: "May 15, 2024",
      targetCandidates: 50,
      costPerHire: "$8,000"
    },
    {
      title: "DevOps Engineers",
      status: "Active", 
      created: "Jan 15, 2024",
      budget: "$30,000",
      positions: 2,
      applications: 89,
      interviews: 15,
      hires: 1,
      responseRate: "78%",
      avgTimeToHire: "25 days",
      description: "Infrastructure experts to scale our cloud architecture",
      requirements: ["AWS/GCP", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      channels: ["Stack Overflow", "DevOps communities", "Cloud meetups", "LinkedIn"],
      progress: 80,
      deadline: "March 15, 2024",
      targetCandidates: 100,
      costPerHire: "$5,000"
    },
    {
      title: "UX Designers",
      status: "Completed",
      created: "Dec 1, 2023",
      budget: "$20,000",
      positions: 2,
      applications: 156,
      interviews: 28,
      hires: 2,
      responseRate: "92%",
      avgTimeToHire: "22 days",
      description: "User experience designers for our consumer products",
      requirements: ["5+ years UX", "Figma proficiency", "Design systems", "User research"],
      channels: ["Dribbble", "Behance", "Design communities", "Portfolio sites"],
      progress: 100,
      deadline: "Feb 1, 2024",
      targetCandidates: 200,
      costPerHire: "$3,200"
    },
    {
      title: "Backend Engineers",
      status: "Paused",
      created: "Jan 20, 2024",
      budget: "$35,000",
      positions: 4,
      applications: 45,
      interviews: 8,
      hires: 0,
      responseRate: "65%",
      avgTimeToHire: "N/A",
      description: "Scalable backend systems for high-traffic applications",
      requirements: ["Node.js/Python", "Database design", "API development", "Microservices"],
      channels: ["GitHub", "Stack Overflow", "Tech meetups", "LinkedIn"],
      progress: 40,
      deadline: "April 30, 2024",
      targetCandidates: 120,
      costPerHire: "$4,500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'default';
      case 'Draft': return 'outline';
      case 'Completed': return 'default';
      case 'Paused': return 'secondary';
      default: return 'outline';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-primary';
    if (progress >= 40) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  return (
    <DashboardLayout userRole="recruiter">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Recruitment Campaigns</h1>
            <p className="text-muted-foreground mt-2">
              Manage your hiring campaigns and track performance
            </p>
          </div>
          <Button variant="hero">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>

        {/* Campaign Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-sm text-muted-foreground">Active Campaigns</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">417</h3>
                <p className="text-sm text-muted-foreground">Total Applications</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">82%</h3>
                <p className="text-sm text-muted-foreground">Avg Response Rate</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">$4.2k</h3>
                <p className="text-sm text-muted-foreground">Avg Cost per Hire</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Campaign Filters */}
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm">All Campaigns</Button>
            <Button variant="outline" size="sm">Active (3)</Button>
            <Button variant="outline" size="sm">Draft (2)</Button>
            <Button variant="outline" size="sm">Completed (2)</Button>
            <Button variant="outline" size="sm">Paused (1)</Button>
          </div>
        </Card>

        {/* Campaigns List */}
        <div className="space-y-6">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{campaign.title}</h3>
                    <Badge variant={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{campaign.description}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>

              {/* Campaign Details Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {/* Positions & Timeline */}
                <div>
                  <h5 className="font-medium text-sm mb-3">Campaign Details</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Positions:</span>
                      <span className="font-medium">{campaign.positions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget:</span>
                      <span className="font-medium">{campaign.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span className="font-medium">{campaign.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-medium">{campaign.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h5 className="font-medium text-sm mb-3">Performance</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Applications:</span>
                      <span className="font-medium">{campaign.applications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interviews:</span>
                      <span className="font-medium">{campaign.interviews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hires:</span>
                      <span className="font-medium">{campaign.hires}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Rate:</span>
                      <span className="font-medium">{campaign.responseRate}</span>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h5 className="font-medium text-sm mb-3">Requirements</h5>
                  <div className="flex flex-wrap gap-1">
                    {campaign.requirements.map((req, reqIndex) => (
                      <Badge key={reqIndex} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Channels */}
                <div>
                  <h5 className="font-medium text-sm mb-3">Recruitment Channels</h5>
                  <div className="space-y-1">
                    {campaign.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="text-xs text-muted-foreground">
                        • {channel}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{campaign.costPerHire}</div>
                  <div className="text-xs text-muted-foreground">Cost per Hire</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{campaign.avgTimeToHire}</div>
                  <div className="text-xs text-muted-foreground">Avg Time to Hire</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{campaign.targetCandidates}</div>
                  <div className="text-xs text-muted-foreground">Target Candidates</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                {campaign.status === 'Draft' && (
                  <Button variant="hero">Launch Campaign</Button>
                )}
                {campaign.status === 'Active' && (
                  <>
                    <Button variant="outline">Pause Campaign</Button>
                    <Button variant="hero">View Applications</Button>
                  </>
                )}
                {campaign.status === 'Paused' && (
                  <Button variant="hero">Resume Campaign</Button>
                )}
                {campaign.status === 'Completed' && (
                  <Button variant="outline">View Report</Button>
                )}
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Review
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Campaign Templates */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Campaign Templates</h3>
              <p className="text-sm text-muted-foreground">Quick start with proven campaign structures</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Tech Startup</h4>
              <p className="text-sm text-muted-foreground mb-3">Fast-moving startup environment</p>
              <Button size="sm" variant="outline" className="w-full">Use Template</Button>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Enterprise</h4>
              <p className="text-sm text-muted-foreground mb-3">Large company structured hiring</p>
              <Button size="sm" variant="outline" className="w-full">Use Template</Button>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Remote-First</h4>
              <p className="text-sm text-muted-foreground mb-3">Distributed team hiring</p>
              <Button size="sm" variant="outline" className="w-full">Use Template</Button>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Executive Search</h4>
              <p className="text-sm text-muted-foreground mb-3">Senior leadership positions</p>
              <Button size="sm" variant="outline" className="w-full">Use Template</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};