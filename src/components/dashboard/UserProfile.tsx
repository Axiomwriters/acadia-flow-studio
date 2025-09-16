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
      <Card className={`glass-card ${compact ? 'p-4' : 'p-6'} hover-glow`}>
        <div className={`flex items-center gap-${compact ? '3' : '4'} mb-4`}>
          <Avatar className={`${compact ? 'h-12 w-12' : 'h-16 w-16'} ring-2 ring-primary/20`}>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="gradient-primary text-white text-lg font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className={`${compact ? 'text-base' : 'text-lg'} font-semibold truncate`}>Dr. Jane Doe</h3>
            <p className="text-sm text-muted-foreground truncate">Academic ID: AC-2024-001</p>
            {!compact && (
              <Badge variant="secondary" className="mt-1">
                PhD Student
              </Badge>
            )}
          </div>
          {!compact && (
            <Button variant="ghost" size="icon" className="hover-glow">
              <Settings className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {!compact && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>jane.doe@university.edu</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        )}
        
        {!compact && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="gradient-primary h-2 rounded-full"
              />
            </div>
          </div>
        )}

        {onLogout && (
          <div className={`${compact ? 'mt-3' : 'mt-4'} ${!compact && 'pt-4 border-t'}`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </Card>
    </motion.div>
  )
}