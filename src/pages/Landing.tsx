import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Trophy, Zap } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'student' | 'recruiter'>('student');

  const features = [
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Learn and master in-demand skills with personalized learning paths"
    },
    {
      icon: Users,
      title: "Connect with Opportunities",
      description: "Get matched with scholarships, events, and career opportunities"
    },
    {
      icon: Trophy,
      title: "Build Your Portfolio",
      description: "Showcase your projects and achievements to stand out"
    },
    {
      icon: Zap,
      title: "AI-Powered Mentoring",
      description: "Get personalized guidance from our intelligent mentor system"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center float">
                <span className="text-white font-bold text-lg">SV</span>
              </div>
              <h1 className="text-4xl font-bold text-gradient">SkillVault</h1>
            </div>

            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Unlock Your Potential,<br />
              <span className="text-gradient">Build Your Future</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect students with opportunities and recruiters with talent. 
              Develop skills, showcase projects, and find your next career breakthrough.
            </p>

            {/* Role Selection */}
            <Card className="max-w-md mx-auto mb-8 p-6 glass-card">
              <h3 className="text-lg font-semibold mb-4">I am a...</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Button
                  variant={selectedRole === 'student' ? 'hero' : 'outline'}
                  onClick={() => setSelectedRole('student')}
                  className="h-12"
                >
                  Student
                </Button>
                <Button
                  variant={selectedRole === 'recruiter' ? 'hero' : 'outline'}
                  onClick={() => setSelectedRole('recruiter')}
                  className="h-12"
                >
                  Recruiter
                </Button>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate('/signup', { state: { role: selectedRole } })}
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              </div>
            </Card>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge variant="secondary" className="px-4 py-2">
                1000+ Students
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                500+ Companies
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                95% Success Rate
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Why Choose SkillVault?</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your career growth in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and recruiters who are already building their future
          </p>
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => navigate('/signup', { state: { role: selectedRole } })}
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};