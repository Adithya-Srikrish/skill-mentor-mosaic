import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GraduationCap, Search, Filter, Calendar, DollarSign, MapPin, ExternalLink } from "lucide-react";

export const Scholarships = () => {
  const scholarships = [
    {
      title: "Google Women Techmakers Scholarship",
      organization: "Google",
      amount: "$10,000",
      deadline: "March 15, 2024",
      location: "Global",
      type: "Merit-based",
      description: "Supporting women in computer science and technology fields with academic excellence and leadership potential.",
      requirements: ["Female", "CS/Engineering student", "GPA 3.5+", "Leadership experience"],
      applicants: "~5,000",
      awarded: "150",
      tags: ["Technology", "Women", "CS"],
      status: "Open",
      difficulty: "High"
    },
    {
      title: "Microsoft AI for Accessibility Grant",
      organization: "Microsoft",
      amount: "$15,000",
      deadline: "April 1, 2024",
      location: "Global",
      type: "Project-based",
      description: "Funding for projects that use AI to amplify human capability for people with disabilities.",
      requirements: ["AI/ML experience", "Accessibility focus", "Project proposal", "Team of 2-5"],
      applicants: "~2,000",
      awarded: "25",
      tags: ["AI", "Accessibility", "Innovation"],
      status: "Open",
      difficulty: "Medium"
    },
    {
      title: "GitHub Campus Experts Program",
      organization: "GitHub",
      amount: "$5,000",
      deadline: "February 28, 2024",
      location: "Global",
      type: "Leadership",
      description: "Training and funding for student leaders to build tech communities on their campuses.",
      requirements: ["Student status", "Community building interest", "GitHub experience"],
      applicants: "~3,000",
      awarded: "100",
      tags: ["Community", "Leadership", "Open Source"],
      status: "Closing Soon",
      difficulty: "Medium"
    },
    {
      title: "Amazon Future Engineer Scholarship",
      organization: "Amazon",
      amount: "$40,000",
      deadline: "May 15, 2024",
      location: "US",
      type: "Need-based",
      description: "Multi-year scholarship for underrepresented students in computer science.",
      requirements: ["CS major", "Underrepresented minority", "Financial need", "US citizen"],
      applicants: "~8,000",
      awarded: "400",
      tags: ["CS", "Diversity", "Multi-year"],
      status: "Open",
      difficulty: "High"
    },
    {
      title: "Meta University Engineering Program",
      organization: "Meta",
      amount: "$8,000",
      deadline: "March 30, 2024",
      location: "US",
      type: "Internship + Scholarship",
      description: "Paid internship program with scholarship for first and second-year students.",
      requirements: ["1st/2nd year student", "CS/Engineering major", "US work authorization"],
      applicants: "~4,500",
      awarded: "60",
      tags: ["Internship", "Early Career", "Engineering"],
      status: "Open",
      difficulty: "High"
    },
    {
      title: "Local Tech Community Grant",
      organization: "TechCity Foundation",
      amount: "$2,000",
      deadline: "March 10, 2024",
      location: "Local",
      type: "Community",
      description: "Supporting local students pursuing technology education and career development.",
      requirements: ["Local resident", "Tech field interest", "Community involvement"],
      applicants: "~200",
      awarded: "10",
      tags: ["Local", "Community", "Tech"],
      status: "Open",
      difficulty: "Low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'default';
      case 'Closing Soon': return 'destructive';
      case 'Closed': return 'outline';
      default: return 'outline';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Scholarships</h1>
            <p className="text-muted-foreground mt-2">
              Discover funding opportunities for your education and projects
            </p>
          </div>
          <Button variant="hero">
            <ExternalLink className="h-4 w-4 mr-2" />
            External Database
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="p-6">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search scholarships..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">All Types</Button>
            <Button variant="outline" size="sm">Merit-based</Button>
            <Button variant="outline" size="sm">Need-based</Button>
            <Button variant="outline" size="sm">Technology</Button>
            <Button variant="outline" size="sm">Diversity</Button>
            <Button variant="outline" size="sm">Research</Button>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">24</h3>
                <p className="text-sm text-muted-foreground">Available Now</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">$180k</h3>
                <p className="text-sm text-muted-foreground">Total Value</p>
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
                <p className="text-sm text-muted-foreground">Closing This Month</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-sm text-muted-foreground">Match Your Profile</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Scholarships List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Available Scholarships</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Sort by Deadline</Button>
              <Button variant="outline" size="sm">Sort by Amount</Button>
              <Button variant="outline" size="sm">Sort by Match</Button>
            </div>
          </div>

          <div className="grid gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{scholarship.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{scholarship.organization}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-1">{scholarship.amount}</div>
                        <Badge variant={getStatusColor(scholarship.status)}>
                          {scholarship.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{scholarship.description}</p>

                    {/* Key Info */}
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Deadline</p>
                          <p className="text-sm font-medium">{scholarship.deadline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="text-sm font-medium">{scholarship.location}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Competition</p>
                        <p className="text-sm font-medium">{scholarship.applicants} applicants</p>
                        <p className="text-xs text-muted-foreground">{scholarship.awarded} awarded</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Difficulty</p>
                        <Badge variant={getDifficultyColor(scholarship.difficulty)} className="text-xs">
                          {scholarship.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4">
                      <h5 className="font-medium text-sm mb-2">Requirements</h5>
                      <div className="flex flex-wrap gap-1">
                        {scholarship.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {scholarship.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="hero">Apply Now</Button>
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline">Save for Later</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Tips */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Application Tips</h3>
              <p className="text-sm text-muted-foreground">Increase your chances of success</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Start Early</h4>
              <p className="text-sm text-muted-foreground">Begin applications 2-3 months before deadlines</p>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Tailor Your Essays</h4>
              <p className="text-sm text-muted-foreground">Customize each application to match specific requirements</p>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <h4 className="font-medium mb-2">Strong References</h4>
              <p className="text-sm text-muted-foreground">Choose recommenders who know your work well</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};