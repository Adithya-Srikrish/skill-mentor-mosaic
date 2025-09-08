import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, Calendar, CheckCircle, Clock, ExternalLink, Filter } from "lucide-react";

export const OpportunityTracker = () => {
  const opportunities = [
    {
      title: "Google Summer of Code 2024",
      type: "Program",
      organization: "Google",
      status: "Applied",
      appliedDate: "Feb 15, 2024",
      deadline: "March 15, 2024",
      progress: 60,
      nextStep: "Wait for selection results",
      estimatedResponse: "March 20, 2024",
      description: "Work on open source projects with mentors from Google",
      requirements: ["Programming skills", "Open source experience", "Good English"],
      compensation: "$3,000 - $6,600"
    },
    {
      title: "Microsoft Ignite Conference",
      type: "Event",
      organization: "Microsoft",
      status: "Registered",
      appliedDate: "Feb 10, 2024",
      deadline: "March 1, 2024",
      progress: 100,
      nextStep: "Attend event",
      estimatedResponse: "March 1, 2024",
      description: "Annual developer conference with workshops and networking",
      requirements: ["Student status", "Interest in Microsoft technologies"],
      compensation: "Free attendance + swag"
    },
    {
      title: "AI Research Scholarship",
      type: "Scholarship",
      organization: "Stanford University",
      status: "Draft",
      appliedDate: "",
      deadline: "April 1, 2024",
      progress: 25,
      nextStep: "Complete application essay",
      estimatedResponse: "May 15, 2024",
      description: "Full scholarship for AI/ML research program",
      requirements: ["CS background", "Research experience", "GPA 3.5+"],
      compensation: "$50,000 + tuition"
    },
    {
      title: "React Developer Internship",
      type: "Job",
      organization: "TechStart Inc.",
      status: "Interview Scheduled",
      appliedDate: "Feb 5, 2024",
      deadline: "Feb 28, 2024",
      progress: 80,
      nextStep: "Technical interview on Feb 25",
      estimatedResponse: "March 5, 2024",
      description: "3-month internship focusing on React development",
      requirements: ["React experience", "JavaScript proficiency", "Portfolio"],
      compensation: "$4,000/month"
    },
    {
      title: "Tech4Good Hackathon",
      type: "Event",
      organization: "Tech4Good",
      status: "Interested",
      appliedDate: "",
      deadline: "March 10, 2024",
      progress: 10,
      nextStep: "Register for event",
      estimatedResponse: "March 10, 2024",
      description: "48-hour hackathon for social impact projects",
      requirements: ["Programming skills", "Team collaboration"],
      compensation: "$10,000 prize pool"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Applied': return 'default';
      case 'Interview Scheduled': return 'secondary';
      case 'Registered': return 'default';
      case 'Draft': return 'outline';
      case 'Interested': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Program': return '🎓';
      case 'Event': return '📅';
      case 'Scholarship': return '💰';
      case 'Job': return '💼';
      default: return '📋';
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Opportunity Tracker</h1>
            <p className="text-muted-foreground mt-2">
              Track your applications, interviews, and opportunities
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="hero">
              <ExternalLink className="h-4 w-4 mr-2" />
              Find Opportunities
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">15</h3>
                <p className="text-sm text-muted-foreground">Total Applied</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">5</h3>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-sm text-muted-foreground">Upcoming Deadlines</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Opportunities Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Active Opportunities</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Applications</Button>
              <Button variant="outline" size="sm">Events</Button>
              <Button variant="outline" size="sm">Deadlines</Button>
            </div>
          </div>

          <div className="space-y-4">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-2xl">{getTypeIcon(opportunity.type)}</div>
                  
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{opportunity.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{opportunity.organization}</p>
                        <p className="text-sm mb-3">{opportunity.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(opportunity.status)} className="mb-2">
                          {opportunity.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          Deadline: {opportunity.deadline}
                        </p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{opportunity.progress}%</span>
                      </div>
                      <Progress value={opportunity.progress} className="h-2" />
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h5 className="font-medium text-sm mb-2">Next Step</h5>
                        <p className="text-sm text-muted-foreground">{opportunity.nextStep}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-2">Expected Response</h5>
                        <p className="text-sm text-muted-foreground">{opportunity.estimatedResponse}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-2">Compensation</h5>
                        <p className="text-sm text-muted-foreground">{opportunity.compensation}</p>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4">
                      <h5 className="font-medium text-sm mb-2">Requirements</h5>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {opportunity.status === 'Draft' && (
                        <Button size="sm" variant="hero">Continue Application</Button>
                      )}
                      {opportunity.status === 'Interested' && (
                        <Button size="sm" variant="hero">Apply Now</Button>
                      )}
                      {opportunity.status === 'Applied' && (
                        <Button size="sm" variant="outline">View Application</Button>
                      )}
                      {opportunity.status === 'Interview Scheduled' && (
                        <Button size="sm" variant="hero">Prepare for Interview</Button>
                      )}
                      {opportunity.status === 'Registered' && (
                        <Button size="sm" variant="default">View Event Details</Button>
                      )}
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <p className="text-sm text-muted-foreground">Manage your opportunities efficiently</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <Calendar className="h-5 w-5 mb-2" />
              <span className="font-medium">Set Reminders</span>
              <span className="text-xs text-muted-foreground">Never miss a deadline</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <ExternalLink className="h-5 w-5 mb-2" />
              <span className="font-medium">Find More</span>
              <span className="text-xs text-muted-foreground">Discover opportunities</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <TrendingUp className="h-5 w-5 mb-2" />
              <span className="font-medium">Analytics</span>
              <span className="text-xs text-muted-foreground">Track success rate</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <CheckCircle className="h-5 w-5 mb-2" />
              <span className="font-medium">Templates</span>
              <span className="text-xs text-muted-foreground">Application helpers</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};