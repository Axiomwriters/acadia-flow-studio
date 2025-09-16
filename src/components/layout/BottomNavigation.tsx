import { NavLink, useLocation } from "react-router-dom"
import { Home, BookOpen, Calendar, FileText, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const bottomNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Calendar", href: "/schedule", icon: Calendar },
  { name: "Papers", href: "/papers", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function BottomNavigation() {
  const location = useLocation()
  
  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 lg:hidden z-30"
    >
      <div className="glass-card border-t backdrop-blur-md mx-4 mb-4 rounded-2xl p-2">
        <div className="flex items-center justify-around">
          {bottomNavItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 hover-lift",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <div className={cn(
                  "p-2 rounded-xl transition-all duration-200",
                  isActive 
                    ? "gradient-primary text-white shadow-lg animate-glow" 
                    : "hover:bg-muted"
                )}>
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">{item.name}</span>
              </NavLink>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}