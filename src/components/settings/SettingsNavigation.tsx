import { motion } from "framer-motion"
import { User, Shield, Bell, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

interface SettingsNavigationProps {
  activeSection: number
  onSectionChange: (index: number) => void
}

const settingSections = [
  {
    title: "Profile",
    icon: User,
    description: "Manage your personal information",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Security",
    icon: Shield,
    description: "Password and authentication settings",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Notifications",
    icon: Bell,
    description: "Control your notification preferences",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Preferences",
    icon: Palette,
    description: "Customize your app experience",
    color: "from-purple-500 to-purple-600"
  }
]

export function SettingsNavigation({ activeSection, onSectionChange }: SettingsNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {settingSections.map((section, index) => {
        const isActive = activeSection === index
        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`p-6 cursor-pointer transition-all duration-300 hover-lift ${
                isActive 
                  ? "ring-2 ring-primary shadow-lg bg-primary/5" 
                  : "hover:shadow-md glass-card"
              }`}
              onClick={() => onSectionChange(index)}
            >
              <div className="flex items-center gap-4">
                <div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
                >
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {section.description}
                  </p>
                </div>
              </div>
              
              {isActive && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4"
                />
              )}
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}