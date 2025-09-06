import { motion } from "framer-motion"
import { User, Shield, Bell, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

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
    <>
      {/* Mobile Carousel View */}
      <div className="block md:hidden mb-8">
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {settingSections.map((section, index) => {
              const isActive = activeSection === index
              return (
                <CarouselItem key={section.title} className="basis-4/5">
                  <div className="p-1">
                    <Card
                      className={`p-6 cursor-pointer transition-all duration-200 ${
                        isActive 
                          ? "ring-2 ring-primary shadow-lg bg-primary/5" 
                          : "hover:shadow-md glass-card"
                      }`}
                      onClick={() => onSectionChange(index)}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}
                        >
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                            {section.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {section.description}
                          </p>
                        </div>
                        
                        {isActive && (
                          <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full w-full" />
                        )}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {settingSections.map((section, index) => {
          const isActive = activeSection === index
          return (
            <Card
              key={section.title}
              className={`p-6 cursor-pointer transition-all duration-200 ${
                isActive 
                  ? "ring-2 ring-primary shadow-lg bg-primary/5" 
                  : "hover:shadow-md glass-card hover:scale-105"
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
                <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
              )}
            </Card>
          )
        })}
      </div>
    </>
  )
}