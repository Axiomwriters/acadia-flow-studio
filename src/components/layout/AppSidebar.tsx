import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Calendar, 
  Settings,
  ChevronLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface AppSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Home", href: "/", icon: LayoutDashboard },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Learning Resources", href: "/courses", icon: BookOpen },
  { name: "Paper Management", href: "/papers", icon: FileText },
  { name: "Scheduling", href: "/schedule", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  const location = useLocation()
  
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
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}