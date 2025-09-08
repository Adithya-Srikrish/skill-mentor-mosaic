import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "@/components/Navbar";
import { ChatBot } from "@/components/ChatBot";
import { StudentSidebar } from "@/components/StudentSidebar";
import { RecruiterSidebar } from "@/components/RecruiterSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: 'student' | 'recruiter';
}

export const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        {userRole === 'student' ? <StudentSidebar /> : <RecruiterSidebar />}
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Global Navbar */}
          <div className="relative">
            <SidebarTrigger className="absolute left-4 top-4 z-50" />
            <Navbar userRole={userRole} />
          </div>
          
          {/* Page Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
        
        {/* Floating Chatbot */}
        <ChatBot />
      </div>
    </SidebarProvider>
  );
};