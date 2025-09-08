import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  userRole?: 'student' | 'recruiter';
}

export const Navbar = ({ userRole }: NavbarProps) => {
  return (
    <header className="h-16 border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SV</span>
          </div>
          <span className="text-xl font-bold text-gradient">SkillVault</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={userRole === 'recruiter' ? "Search candidates..." : "Search skills, projects..."}
              className="pl-10"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-xs text-destructive-foreground flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};