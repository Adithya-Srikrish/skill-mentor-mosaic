import { NavLink, useLocation } from "react-router-dom";
import { 
  Search, 
  Users, 
  Target,
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
  { title: "Dashboard", url: "/recruiter/dashboard", icon: LayoutDashboard },
  { title: "Find Candidates", url: "/recruiter/candidates", icon: Search },
  { title: "My Candidates", url: "/recruiter/my-candidates", icon: Users },
  { title: "Campaigns", url: "/recruiter/campaigns", icon: Target },
];

export function RecruiterSidebar() {
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
            Recruiter Portal
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