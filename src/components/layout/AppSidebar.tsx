import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Calendar, 
  Settings,
  ChevronLeft,
  LogOut,
  User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface AppSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Learning Resources", href: "/courses", icon: BookOpen },
  { name: "Paper Management", href: "/papers", icon: FileText },
  { name: "Scheduling", href: "/schedule", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/")
    onClose()
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
          
          {/* Sidebar */}
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed lg:static inset-y-0 left-0 z-50 w-64 glass-card border-r backdrop-blur-md lg:block"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="font-semibold">AcademiaFlow</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="lg:hidden"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex-1 p-4 space-y-2">
                {navigation.map((item, index) => {
                  const isActive = location.pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover-lift",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg animate-glow"
                            : "text-foreground hover:bg-muted hover-glow"
                        )}
                        onClick={() => {
                          // Close on mobile after navigation
                          if (window.innerWidth < 1024) onClose()
                        }}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </NavLink>
                    </motion.div>
                  )
                })}
              </nav>

              {/* User Profile Card */}
              <div className="p-4 mt-auto">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-4 rounded-xl border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Dr. Jane Doe</p>
                      <p className="text-xs text-muted-foreground truncate">ID: AC-2024-001</p>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}