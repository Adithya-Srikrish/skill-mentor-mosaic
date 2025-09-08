import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MessageSquare, Send, Bot, User, Lightbulb, BookOpen, Target } from "lucide-react";

export const AIMentor = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! I'm your AI mentor. I'm here to help you with skill development, career guidance, and learning recommendations. What would you like to discuss today?",
      timestamp: "Just now"
    },
    {
      type: "user", 
      content: "I want to improve my React skills. What should I focus on next?",
      timestamp: "2 min ago"
    },
    {
      type: "bot",
      content: "Great question! Based on your current progress, I recommend focusing on these areas:\n\n1. **Advanced React Patterns** - Higher-order components, render props, and compound components\n2. **State Management** - Learn Redux Toolkit or Zustand for complex state\n3. **Testing** - React Testing Library for component testing\n4. **Performance** - React.memo, useMemo, and useCallback optimization\n\nWould you like me to create a detailed learning plan for any of these topics?",
      timestamp: "2 min ago"
    }
  ]);

  const quickActions = [
    { title: "Career Guidance", icon: Target, description: "Get advice on career paths and opportunities" },
    { title: "Skill Assessment", icon: BookOpen, description: "Evaluate your current skills and identify gaps" },
    { title: "Learning Plan", icon: Lightbulb, description: "Create a personalized learning roadmap" },
  ];

  const suggestedQuestions = [
    "What skills are most in-demand for frontend developers?",
    "How can I build a strong portfolio?",
    "What's the best way to learn machine learning?",
    "How do I prepare for technical interviews?",
    "Which programming language should I learn next?",
  ];

  const handleSend = () => {
    if (message.trim()) {
      const newUserMessage = {
        type: "user" as const,
        content: message,
        timestamp: "Just now"
      };
      
      setMessages(prev => [...prev, newUserMessage]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          type: "bot" as const,
          content: "I understand your question. Let me provide you with a comprehensive answer based on current industry trends and best practices...",
          timestamp: "Just now"
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <DashboardLayout userRole="student">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI Mentor</h1>
            <p className="text-muted-foreground mt-2">
              Get personalized guidance for your learning journey
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">AI Online</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Mentor</h3>
                    <p className="text-sm text-muted-foreground">Your personal learning assistant</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-1' : ''}`}>
                      <div className={`p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{msg.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {msg.timestamp}
                      </p>
                    </div>

                    {msg.type === 'user' && (
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about skills, careers, or learning..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} variant="hero">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-3"
                  >
                    <action.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium text-sm">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Suggested Questions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Questions</h3>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(question)}
                    className="w-full text-left p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </Card>

            {/* Learning Stats */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Questions Asked</span>
                  <span className="text-sm font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Skills Improved</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Plans Created</span>
                  <span className="text-sm font-medium">5</span>
                </div>
              </div>
              
              <Button variant="hero" size="sm" className="w-full mt-4">
                View Detailed Report
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};