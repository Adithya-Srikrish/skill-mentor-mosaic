import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialRole = location.state?.role || 'student';
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: initialRole as 'student' | 'recruiter'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    
    // Redirect to appropriate dashboard
    const dashboard = formData.role === 'student' ? '/student/dashboard' : '/recruiter/dashboard';
    navigate(dashboard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="p-8 glass-card">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SV</span>
              </div>
              <span className="text-2xl font-bold text-gradient">SkillVault</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">Join the community and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">I am a</Label>
              <Select value={formData.role} onValueChange={(value: 'student' | 'recruiter') => 
                setFormData(prev => ({ ...prev, role: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Create Account
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Button variant="link" onClick={() => navigate('/login')} className="p-0 h-auto">
                Sign in
              </Button>
            </p>
            
            <Button variant="ghost" onClick={() => navigate('/')} className="text-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};