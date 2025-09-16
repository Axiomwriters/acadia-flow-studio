import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  BarChart3, 
  Users, 
  Clock,
  Target,
  Award,
  Zap,
  Shield,
  Smartphone,
  Monitor
} from "lucide-react"

const Index = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleNavigateToLogin = () => {
    navigate('/login')
  }
  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Organize and track your academic courses with intelligent progress monitoring",
      color: "from-blue-500 to-blue-600",
      href: "/courses"
    },
    {
      icon: FileText,
      title: "Paper Management",
      description: "Streamline your research papers and publications with advanced categorization",
      color: "from-green-500 to-green-600",
      href: "/papers"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Never miss deadlines with our intelligent calendar and reminder system",
      color: "from-purple-500 to-purple-600",
      href: "/schedule"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your academic progress with detailed insights and performance metrics",
      color: "from-orange-500 to-orange-600",
      href: "/"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Connect with peers and collaborate on projects seamlessly",
      color: "from-pink-500 to-pink-600",
      href: "/collaboration"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and achieve your academic goals with personalized milestones",
      color: "from-indigo-500 to-indigo-600",
      href: "/goals"
    }
  ]

  const stats = [
    { label: "Active Students", value: "10,000+", icon: Users },
    { label: "Papers Managed", value: "50,000+", icon: FileText },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Time Saved", value: "40hrs/mo", icon: Clock }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 py-20"
      >
        <div className="space-y-4">
          <Badge className="mb-4 gradient-primary text-white">
            <Zap className="h-4 w-4 mr-2" />
            Academic Excellence Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gradient">Transform Your</span>
            <br />
            Academic Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your academic workflow with our comprehensive platform designed for 
            students, researchers, and educators. Track progress, manage papers, and achieve excellence.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="gradient-primary text-lg px-8 py-4"
            onClick={handleNavigateToLogin}
          >
            Join Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4"
            onClick={handleNavigateToLogin}
          >
            How It Works
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for Academic Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to excel in your academic pursuits, all in one intuitive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="glass-card p-8 h-full hover-lift cursor-pointer group"
                onClick={handleNavigateToLogin}
              >
                <div className="space-y-4">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose AcademiaFlow?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your academic data is protected with enterprise-grade security
            </p>
          </Card>
          
          <Card className="glass-card p-8 text-center">
            <Smartphone className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Mobile Ready</h3>
            <p className="text-muted-foreground">
              Access your academic tools anywhere with our responsive design
            </p>
          </Card>
          
          <Card className="glass-card p-8 text-center">
            <Monitor className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Cross Platform</h3>
            <p className="text-muted-foreground">
              Seamlessly sync across all your devices and platforms
            </p>
          </Card>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center space-y-8 py-20"
      >
        <Card className="glass-card p-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students and researchers who are already using AcademiaFlow 
              to achieve their academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-lg px-8 py-4"
                onClick={handleNavigateToLogin}
              >
                Join Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={handleNavigateToLogin}
              >
                How It Works
              </Button>
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  )
}

export default Index
