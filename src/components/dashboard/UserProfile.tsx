import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Mail, Phone, LogOut } from "lucide-react"

interface UserProfileProps {
  compact?: boolean
  onLogout?: () => void
}

export function UserProfile({ compact = false, onLogout }: UserProfileProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 border rounded-xl">
        {/* Header with Avatar, Info, and Settings */}
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="h-12 w-12 bg-purple-500">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-purple-500 text-white text-lg font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground">Dr. Jane Doe</h3>
            <p className="text-sm text-muted-foreground">Academic ID: AC-2024-001</p>
            <p className="text-sm text-foreground mt-0.5">PhD Student</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">jane.doe@university.edu</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">+1 (555) 123-4567</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium text-foreground">78%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-blue-500 h-2 rounded-full"
            />
          </div>
        </div>

        {/* Logout Button */}
        {onLogout && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        )}
      </Card>
    </motion.div>
  )
}