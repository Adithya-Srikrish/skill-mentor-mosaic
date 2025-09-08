import { NavLink, useLocation } from "react-router-dom";
import { 
  Brain, 
  Code, 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  GraduationCap, 
  Calendar,
  LayoutDashboard 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/student/dashboard", icon: LayoutDashboard },
  { title: "Skills", url: "/student/skills", icon: Brain },
  { title: "Projects", url: "/student/projects", icon: Code },
  { title: "AI Mentor", url: "/student/ai-mentor", icon: MessageSquare },
  { title: "Preferences", url: "/student/preferences", icon: Settings },
  { title: "Opportunity Tracker", url: "/student/tracker", icon: TrendingUp },
  { title: "Scholarships", url: "/student/scholarships", icon: GraduationCap },
  { title: "Events", url: "/student/events", icon: Calendar },
];

export function StudentSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground shadow-soft" 
      : "hover:bg-muted/50 transition-colors";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Student Portal
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavClasses({ isActive })}
                    >
                      <item.icon className="h-5 w-5" />
                      {state === "expanded" && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}