import { Search, Bell, Menu, Home, BookOpen, Calendar, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { motion } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"

interface AppHeaderProps {
  onMenuToggle: () => void
}

const desktopNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Calendar", url: "/schedule", icon: Calendar },
  { title: "Papers", url: "/papers", icon: FileText },
  { title: "Profile", url: "/settings", icon: User },
]

export function AppHeader({ onMenuToggle }: AppHeaderProps) {
  const location = useLocation()

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-card h-16 px-4 flex items-center justify-between border-b backdrop-blur-md sticky top-0 z-50"
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden hover-glow"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">AcademiaFlow</span>
        </NavLink>
      </div>

      <div className="flex-1 max-w-md mx-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search courses, papers, schedules..."
          className="pl-10 glass-card border-0 focus:ring-2 focus:ring-primary/50 animate-glow"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 mx-6">
        {desktopNavItems.map((item) => {
          const isActive = location.pathname === item.url
          return (
            <NavLink
              key={item.url}
              to={item.url}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{item.title}</span>
            </NavLink>
          )
        })}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative hover-glow">
          <Bell className="h-5 w-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
        </Button>
        <ThemeToggle />
      </div>
    </motion.header>
  )
}