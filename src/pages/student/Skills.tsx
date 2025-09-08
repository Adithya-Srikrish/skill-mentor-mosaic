import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Brain, Plus, Trophy, Clock } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, status: "Mastered", hours: 240 },
        { name: "Python", level: 75, status: "Advanced", hours: 180 },
        { name: "TypeScript", level: 85, status: "Advanced", hours: 160 },
        { name: "Go", level: 35, status: "Learning", hours: 45 },
      ]
    },
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "React", level: 88, status: "Advanced", hours: 220 },
        { name: "Next.js", level: 70, status: "Intermediate", hours: 120 },
        { name: "Vue.js", level: 45, status: "Beginner", hours: 60 },
      ]
    },
    {
      category: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 65, status: "Intermediate", hours: 85 },
        { name: "Adobe XD", level: 40, status: "Beginner", hours: 35 },
        { name: "UI Design", level: 60, status: "Intermediate", hours: 95 },
      ]
    }
  ];

  const achievements = [
    { title: "JavaScript Master", icon: Trophy, description: "Completed advanced JavaScript course", date: "Dec 2023" },
    { title: "React Expert", icon: Trophy, description: "Built 5+ React applications", date: "Nov 2023" },
    { title: "Quick Learner", icon: Brain, description: "Learned 3 new skills this month", date: "Jan 2024" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Mastered': return 'default';
      case 'Advanced': return 'secondary';
      case 'Intermediate': return 'outline';
      case 'Learning': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Skills</h1>
            <p className="text-muted-foreground mt-2">
              Track your progress and discover new skills to master
            </p>
          </div>
          <Button variant="hero">
            <Plus className="h-4 w-4 mr-2" />
            Add New Skill
          </Button>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">23</h3>
                <p className="text-sm text-muted-foreground">Total Skills</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Mastered: 8</span>
                <span>Learning: 4</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">1,240</h3>
                <p className="text-sm text-muted-foreground">Hours Practiced</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              +32 hours this week
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">15</h3>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              3 earned this month
            </p>
          </Card>
        </div>

        {/* Skills by Category */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6">
                <h2 className="text-xl font-semibold mb-6">{category.category}</h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant={getStatusColor(skill.status)}>
                            {skill.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {skill.hours}h practiced
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements & Recommendations */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Achievements</h2>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs font-medium">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-3">Recommended Skills</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your current learning path
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between p-2 bg-white/50 rounded">
                  <span className="text-sm font-medium">Node.js</span>
                  <Button size="sm" variant="outline">Learn</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/50 rounded">
                  <span className="text-sm font-medium">GraphQL</span>
                  <Button size="sm" variant="outline">Learn</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/50 rounded">
                  <span className="text-sm font-medium">Docker</span>
                  <Button size="sm" variant="outline">Learn</Button>
                </div>
              </div>
              
              <Button variant="hero" size="sm" className="w-full">
                View All Recommendations
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};