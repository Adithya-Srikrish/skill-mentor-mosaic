import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Calendar, Clock, MapPin, Users, Star, ExternalLink, Filter } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "React Conf 2024",
      date: "March 15-16, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      type: "Conference",
      format: "In-person",
      organizer: "React Team",
      description: "The official React conference featuring talks from core team members and community leaders.",
      price: "$599",
      capacity: "2,000",
      registered: "1,847",
      topics: ["React 19", "Server Components", "Performance", "Accessibility"],
      speakers: ["Dan Abramov", "Sophie Alpert", "Sebastian Markbåge"],
      status: "Registration Open",
      difficulty: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "AI/ML Workshop Series",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      type: "Workshop",
      format: "Online",
      organizer: "Tech University",
      description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
      price: "Free",
      capacity: "500",
      registered: "324",
      topics: ["Neural Networks", "TensorFlow", "Data Preprocessing", "Model Deployment"],
      speakers: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      status: "Registration Open",
      difficulty: "Beginner",
      image: "/placeholder.svg"
    },
    {
      title: "Startup Pitch Competition",
      date: "March 25, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub, NYC",
      type: "Competition",
      format: "Hybrid",
      organizer: "Startup Accelerator",
      description: "Present your startup idea to investors and win funding for your project.",
      price: "Free",
      capacity: "100",
      registered: "67",
      topics: ["Pitching", "Business Models", "Funding", "Networking"],
      speakers: ["Various VCs", "Successful Entrepreneurs"],
      status: "Registration Open",
      difficulty: "Advanced",
      image: "/placeholder.svg"
    },
    {
      title: "Women in Tech Networking",
      date: "March 28, 2024",
      time: "7:00 PM - 9:30 PM",
      location: "Tech Campus, Seattle",
      type: "Networking",
      format: "In-person",
      organizer: "Women in Tech Seattle",
      description: "Connect with other women in technology, share experiences, and build professional relationships.",
      price: "$25",
      capacity: "150",
      registered: "89",
      topics: ["Career Growth", "Mentorship", "Work-Life Balance", "Leadership"],
      speakers: ["Industry Leaders", "Tech Executives"],
      status: "Registration Open",
      difficulty: "All Levels",
      image: "/placeholder.svg"
    },
    {
      title: "Cybersecurity Bootcamp",
      date: "April 2-4, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Cyber Institute, Austin",
      type: "Bootcamp",
      format: "In-person",
      organizer: "CyberSec Academy",
      description: "Intensive 3-day bootcamp covering cybersecurity fundamentals and ethical hacking.",
      price: "$899",
      capacity: "50",
      registered: "42",
      topics: ["Ethical Hacking", "Network Security", "Incident Response", "Penetration Testing"],
      speakers: ["Security Experts", "Ethical Hackers"],
      status: "Almost Full",
      difficulty: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Open Source Contribution Workshop",
      date: "April 5, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Virtual",
      type: "Workshop",
      format: "Online",
      organizer: "Open Source Foundation",
      description: "Learn how to contribute to open source projects and build your developer portfolio.",
      price: "Free",
      capacity: "Unlimited",
      registered: "1,234",
      topics: ["Git/GitHub", "Code Review", "Documentation", "Community Building"],
      speakers: ["Open Source Maintainers", "GitHub Team"],
      status: "Registration Open",
      difficulty: "Beginner",
      image: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open': return 'default';
      case 'Almost Full': return 'secondary';
      case 'Sold Out': return 'destructive';
      case 'Past Event': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Conference': return '🎤';
      case 'Workshop': return '🛠️';
      case 'Networking': return '🤝';
      case 'Competition': return '🏆';
      case 'Bootcamp': return '⚡';
      default: return '📅';
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Events</h1>
            <p className="text-muted-foreground mt-2">
              Discover workshops, conferences, and networking opportunities
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="hero">
              <ExternalLink className="h-4 w-4 mr-2" />
              Submit Event
            </Button>
          </div>
        </div>

        {/* Event Categories */}
        <Card className="p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <Button variant="default" size="sm">All Events</Button>
            <Button variant="outline" size="sm">🎤 Conferences</Button>
            <Button variant="outline" size="sm">🛠️ Workshops</Button>
            <Button variant="outline" size="sm">🤝 Networking</Button>
            <Button variant="outline" size="sm">🏆 Competitions</Button>
            <Button variant="outline" size="sm">⚡ Bootcamps</Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">This Week</Button>
            <Button variant="outline" size="sm">This Month</Button>
            <Button variant="outline" size="sm">Free Events</Button>
            <Button variant="outline" size="sm">Virtual</Button>
            <Button variant="outline" size="sm">In-Person</Button>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">24</h3>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-sm text-muted-foreground">Events Attended</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-sm text-muted-foreground">Hours Learning</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">4.8</h3>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Calendar View</Button>
              <Button variant="outline" size="sm">List View</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-300">
                {/* Event Image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-4xl">{getTypeIcon(event.type)}</div>
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.organizer}</p>
                    </div>
                    <Badge variant={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                      <Badge variant="outline" className="text-xs ml-2">
                        {event.format}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {event.topics.slice(0, 3).map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {event.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{event.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Event Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center gap-4">
                      <span className="font-medium text-primary">{event.price}</span>
                      <span className="text-muted-foreground">
                        {event.registered}/{event.capacity === "Unlimited" ? "∞" : event.capacity} registered
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {event.difficulty}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="hero" className="flex-1">
                      Register Now
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* My Events */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">My Registered Events</h3>
              <p className="text-sm text-muted-foreground">Events you've signed up for</p>
            </div>
            <Button variant="outline" size="sm">View Calendar</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🛠️</span>
                <h4 className="font-medium text-sm">AI/ML Workshop</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">March 20, 2:00 PM</p>
              <Badge variant="default" className="text-xs">Confirmed</Badge>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🤝</span>
                <h4 className="font-medium text-sm">Women in Tech</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">March 28, 7:00 PM</p>
              <Badge variant="default" className="text-xs">Confirmed</Badge>
            </div>
            
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🛠️</span>
                <h4 className="font-medium text-sm">Open Source Workshop</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">April 5, 1:00 PM</p>
              <Badge variant="secondary" className="text-xs">Waitlist</Badge>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};