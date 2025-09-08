import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Brain, Code, Calendar, TrendingUp, Star, ArrowRight } from "lucide-react";

export const StudentDashboard = () => {
  const stats = [
    { title: "Skills Mastered", value: "12", icon: Brain, change: "+3 this month" },
    { title: "Projects Completed", value: "8", icon: Code, change: "+2 this week" },
    { title: "Upcoming Events", value: "5", icon: Calendar, change: "Next: Tomorrow" },
    { title: "Opportunities Applied", value: "15", icon: TrendingUp, change: "3 pending" },
  ];

  const recentSkills = [
    { name: "React Development", level: 85, badge: "Advanced" },
    { name: "Machine Learning", level: 60, badge: "Intermediate" },
    { name: "UI/UX Design", level: 40, badge: "Beginner" },
  ];

  const opportunities = [
    { title: "Google Summer of Code", type: "Program", deadline: "March 15", status: "Applied" },
    { title: "Tech Conference 2024", type: "Event", deadline: "Feb 28", status: "Interested" },
    { title: "AI Research Scholarship", type: "Scholarship", deadline: "April 1", status: "Draft" },
  ];

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
            <p className="text-muted-foreground mt-2">
              Continue your learning journey and explore new opportunities
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-warning fill-warning" />
            <span className="font-semibold">Level 8 Learner</span>
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
          {/* Skills Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Current Skills Progress</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {recentSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="outline">{skill.badge}</Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <div className="text-sm text-muted-foreground text-right">
                      {skill.level}% Complete
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Completed "Advanced React Patterns" module</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Applied to Google Summer of Code</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">Started new project: "E-commerce Dashboard"</p>
                    <p className="text-sm text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Opportunities */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Opportunities</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {opportunities.map((opp, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{opp.title}</h4>
                      <Badge 
                        variant={opp.status === 'Applied' ? 'default' : opp.status === 'Interested' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {opp.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{opp.type}</p>
                    <p className="text-xs font-medium">Deadline: {opp.deadline}</p>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="sm" className="w-full mt-4">
                Explore More Opportunities
              </Button>
            </Card>

            {/* AI Mentor Quick Access */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-3">AI Mentor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get personalized learning recommendations and career guidance
              </p>
              <Button variant="hero" size="sm" className="w-full">
                Chat with Mentor
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};