import { useState } from "react"
import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Shield, Bell, Palette, Download, Camera } from "lucide-react"

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    inApp: true,
    deadlines: true,
    meetings: true
  })

  const settingSections = [
    {
      title: "Profile",
      icon: User,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-2 ring-primary/20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="gradient-primary text-white text-xl font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full gradient-primary"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Dr. Jane Doe</h3>
              <p className="text-sm text-muted-foreground">PhD Student</p>
              <Badge variant="secondary" className="mt-1">Academic ID: AC-2024-001</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Jane" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jane.doe@university.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
          
          <Button className="gradient-primary">Save Changes</Button>
        </div>
      )
    },
    {
      title: "Security",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Password</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button variant="outline">Update Password</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Two-Factor Authentication</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable 2FA</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
            <Button variant="outline">Setup 2FA</Button>
          </div>
        </div>
      )
    },
    {
      title: "Notifications",
      icon: Bell,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Notification Channels</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, email: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Browser and mobile notifications</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, push: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">In-App Notifications</p>
                  <p className="text-sm text-muted-foreground">Notifications within the app</p>
                </div>
                <Switch 
                  checked={notifications.inApp}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, inApp: checked }))
                  }
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Notification Types</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Deadline Reminders</p>
                  <p className="text-sm text-muted-foreground">Paper and assignment deadlines</p>
                </div>
                <Switch 
                  checked={notifications.deadlines}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, deadlines: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Meeting Reminders</p>
                  <p className="text-sm text-muted-foreground">Upcoming meetings and events</p>
                </div>
                <Switch 
                  checked={notifications.meetings}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, meetings: checked }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Preferences",
      icon: Palette,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">Appearance</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
              </div>
              <Switch />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Language & Region</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select id="language" className="w-full px-3 py-2 rounded-lg glass-card border-0 bg-background text-foreground">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select id="timezone" className="w-full px-3 py-2 rounded-lg glass-card border-0 bg-background text-foreground">
                  <option value="utc-5">UTC-5 (Eastern)</option>
                  <option value="utc-6">UTC-6 (Central)</option>
                  <option value="utc-7">UTC-7 (Mountain)</option>
                  <option value="utc-8">UTC-8 (Pacific)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Data Export</h4>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Data
              </Button>
              <p className="text-sm text-muted-foreground">
                Download a copy of your academic data
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Account Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your profile, security, and preferences
        </p>
      </motion.div>

      {/* Settings Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          {settingSections.map((section, index) => (
            <Button
              key={section.title}
              variant={activeSection === index ? "default" : "ghost"}
              onClick={() => setActiveSection(index)}
              className={`w-full justify-start gap-3 ${
                activeSection === index 
                  ? "gradient-primary text-white" 
                  : "hover:bg-muted"
              }`}
            >
              <section.icon className="h-5 w-5" />
              {section.title}
            </Button>
          ))}
        </motion.div>

        {/* Settings Content */}
        <motion.div
          key={activeSection}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              {React.createElement(settingSections[activeSection].icon, { 
                className: "h-6 w-6 text-primary" 
              })}
              <h2 className="text-xl font-semibold">
                {settingSections[activeSection].title}
              </h2>
            </div>
            {settingSections[activeSection].content}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}