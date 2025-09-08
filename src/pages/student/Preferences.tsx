import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Settings, MapPin, Bell, Briefcase, Brain, Save } from "lucide-react";

export const Preferences = () => {
  const [preferences, setPreferences] = useState({
    location: "remote",
    jobType: "full-time",
    salaryRange: "60k-80k",
    workStyle: "hybrid",
    notifications: {
      email: true,
      push: true,
      sms: false,
      jobAlerts: true,
      skillReminders: true,
      eventUpdates: true
    }
  });

  const skillInterests = [
    { name: "Frontend Development", selected: true, category: "Development" },
    { name: "Backend Development", selected: true, category: "Development" },
    { name: "Machine Learning", selected: false, category: "AI/ML" },
    { name: "UI/UX Design", selected: true, category: "Design" },
    { name: "Data Science", selected: false, category: "Data" },
    { name: "Mobile Development", selected: false, category: "Development" },
    { name: "DevOps", selected: false, category: "Infrastructure" },
    { name: "Cybersecurity", selected: false, category: "Security" },
    { name: "Cloud Computing", selected: true, category: "Infrastructure" },
    { name: "Blockchain", selected: false, category: "Emerging Tech" }
  ];

  const [selectedSkills, setSelectedSkills] = useState(
    skillInterests.filter(skill => skill.selected).map(skill => skill.name)
  );

  const toggleSkill = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName)
        ? prev.filter(name => name !== skillName)
        : [...prev, skillName]
    );
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving preferences:", { preferences, selectedSkills });
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Preferences</h1>
            <p className="text-muted-foreground mt-2">
              Customize your learning experience and job preferences
            </p>
          </div>
          <Button variant="hero" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Preferences */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skill Interests */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Skill Interests</h2>
                  <p className="text-sm text-muted-foreground">Select areas you want to learn and improve</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(
                  skillInterests.reduce((acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  }, {} as Record<string, typeof skillInterests>)
                ).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground">{category}</h4>
                    <div className="space-y-2">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            selectedSkills.includes(skill.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => toggleSkill(skill.name)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            {selectedSkills.includes(skill.name) && (
                              <Badge variant="default" className="text-xs">Selected</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Job Preferences */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Job Preferences</h2>
                  <p className="text-sm text-muted-foreground">Set your ideal work conditions and requirements</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Preferred Location</Label>
                  <Select value={preferences.location} onValueChange={(value) => 
                    setPreferences(prev => ({ ...prev, location: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type</Label>
                  <Select value={preferences.jobType} onValueChange={(value) => 
                    setPreferences(prev => ({ ...prev, jobType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Select value={preferences.salaryRange} onValueChange={(value) => 
                    setPreferences(prev => ({ ...prev, salaryRange: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select salary range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40k-60k">$40k - $60k</SelectItem>
                      <SelectItem value="60k-80k">$60k - $80k</SelectItem>
                      <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                      <SelectItem value="100k+">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workStyle">Work Style</Label>
                  <Select value={preferences.workStyle} onValueChange={(value) => 
                    setPreferences(prev => ({ ...prev, workStyle: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaborative">Collaborative</SelectItem>
                      <SelectItem value="independent">Independent</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notification Settings */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Bell className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Control your notification preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications" className="text-sm font-medium">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={preferences.notifications.email}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, notifications: { ...prev.notifications, email: checked } }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications" className="text-sm font-medium">Push Notifications</Label>
                    <p className="text-xs text-muted-foreground">Browser push notifications</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={preferences.notifications.push}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, notifications: { ...prev.notifications, push: checked } }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="job-alerts" className="text-sm font-medium">Job Alerts</Label>
                    <p className="text-xs text-muted-foreground">Notify about new opportunities</p>
                  </div>
                  <Switch
                    id="job-alerts"
                    checked={preferences.notifications.jobAlerts}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, notifications: { ...prev.notifications, jobAlerts: checked } }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="skill-reminders" className="text-sm font-medium">Skill Reminders</Label>
                    <p className="text-xs text-muted-foreground">Practice reminders</p>
                  </div>
                  <Switch
                    id="skill-reminders"
                    checked={preferences.notifications.skillReminders}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, notifications: { ...prev.notifications, skillReminders: checked } }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="event-updates" className="text-sm font-medium">Event Updates</Label>
                    <p className="text-xs text-muted-foreground">Workshop and event notifications</p>
                  </div>
                  <Switch
                    id="event-updates"
                    checked={preferences.notifications.eventUpdates}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, notifications: { ...prev.notifications, eventUpdates: checked } }))
                    }
                  />
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Preference Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Matching Jobs</span>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Skill Courses</span>
                  <span className="text-sm font-medium">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Relevant Events</span>
                  <span className="text-sm font-medium">8</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};