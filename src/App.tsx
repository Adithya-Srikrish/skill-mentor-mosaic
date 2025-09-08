import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { Skills } from "./pages/student/Skills";
import { Projects } from "./pages/student/Projects";
import { AIMentor } from "./pages/student/AIMentor";
import { Preferences } from "./pages/student/Preferences";
import { OpportunityTracker } from "./pages/student/OpportunityTracker";
import { Scholarships } from "./pages/student/Scholarships";
import { Events } from "./pages/student/Events";
import { RecruiterDashboard } from "./pages/recruiter/RecruiterDashboard";
import { CandidateFinder } from "./pages/recruiter/CandidateFinder";
import { MyCandidates } from "./pages/recruiter/MyCandidates";
import { Campaigns } from "./pages/recruiter/Campaigns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/skills" element={<Skills />} />
          <Route path="/student/projects" element={<Projects />} />
          <Route path="/student/ai-mentor" element={<AIMentor />} />
          <Route path="/student/preferences" element={<Preferences />} />
          <Route path="/student/tracker" element={<OpportunityTracker />} />
          <Route path="/student/scholarships" element={<Scholarships />} />
          <Route path="/student/events" element={<Events />} />
          
          {/* Recruiter Routes */}
          <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
          <Route path="/recruiter/candidates" element={<CandidateFinder />} />
          <Route path="/recruiter/my-candidates" element={<MyCandidates />} />
          <Route path="/recruiter/campaigns" element={<Campaigns />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
