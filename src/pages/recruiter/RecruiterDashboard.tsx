import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, Search, Target, TrendingUp, Star, ArrowRight } from "lucide-react";

export const RecruiterDashboard = () => {
  const stats = [
    { title: "Active Campaigns", value: "8", icon: Target, change: "+2 this month" },
    { title: "Candidates Viewed", value: "156", icon: Search, change: "+24 this week" },
    { title: "Connections Made", value: "45", icon: Users, change: "12 pending" },
    { title: "Success Rate", value: "89%", icon: TrendingUp, change: "+5% vs last month" },
  ];

  const topCandidates = [
    { 
      name: "Sarah Chen", 
      skills: ["React", "TypeScript", "Node.js"], 
      level: "Senior", 
      rating: 4.9,
      avatar: "/placeholder.svg",
      status: "Available"
    },
    { 
      name: "Michael Rodriguez", 
      skills: ["Python", "Machine Learning", "Django"], 
      level: "Mid-Level", 
      rating: 4.7,
      avatar: "/placeholder.svg",
      status: "Interested"
    },
    { 
      name: "Emily Zhang", 
      skills: ["UI/UX", "Figma", "React"], 
      level: "Junior", 
      rating: 4.8,
      avatar: "/placeholder.svg",
      status: "Open to Work"
    },
  ];

  const recentActivity = [
    { action: "Contacted Sarah Chen for Frontend Developer role", time: "2 hours ago", type: "contact" },
    { action: "Michael Rodriguez accepted connection request", time: "1 day ago", type: "accepted" },
    { action: "New candidate Emily Zhang matched your criteria", time: "2 days ago", type: "match" },
    { action: "Campaign 'AI Engineers Q1' launched successfully", time: "3 days ago", type: "campaign" },
  ];

  return (
    <DashboardLayout userRole="recruiter">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Jordan!</h1>
            <p className="text-muted-foreground mt-2">
              Find top talent and build amazing teams
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-warning fill-warning" />
            <span className="font-semibold">Premium Recruiter</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <Badge variant="secondary">{stat.change}</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Top Candidates */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Top Matching Candidates</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {topCandidates.map((candidate, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={candidate.avatar} />
                        <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{candidate.name}</h4>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-warning fill-warning" />
                            <span className="text-sm font-medium">{candidate.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{candidate.level}</Badge>
                          <Badge variant={candidate.status === 'Available' ? 'default' : 'secondary'}>
                            {candidate.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {candidate.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="hero">View Profile</Button>
                          <Button size="sm" variant="outline">Contact</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'contact' ? 'bg-primary' :
                      activity.type === 'accepted' ? 'bg-success' :
                      activity.type === 'match' ? 'bg-warning' : 'bg-secondary'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <Button variant="hero" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Find New Candidates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Connections
                </Button>
              </div>
            </Card>

            {/* Campaign Performance */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Active Campaigns</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">Frontend Developers Q1</h4>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">12 applications</p>
                  <div className="flex items-center justify-between text-xs">
                    <span>Response Rate: 85%</span>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">AI Engineers</h4>
                    <Badge variant="secondary">Draft</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Ready to launch</p>
                  <div className="flex items-center justify-between text-xs">
                    <span>Target: 50 candidates</span>
                    <Button size="sm" variant="hero">Launch</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};