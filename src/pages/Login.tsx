import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' as 'student' | 'recruiter'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    
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
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role">Sign in as</Label>
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
              Sign In
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-4">
            <Button variant="link" className="text-sm">
              Forgot your password?
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Button variant="link" onClick={() => navigate('/signup')} className="p-0 h-auto">
                Sign up
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