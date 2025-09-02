import { motion } from "framer-motion"
import { BookOpen, FileText, Calendar, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  {
    title: "Active Courses",
    value: "12",
    change: "+2 this month",
    icon: BookOpen,
    color: "text-academic-purple"
  },
  {
    title: "Papers Published",
    value: "8",
    change: "+3 this quarter",
    icon: FileText,
    color: "text-academic-blue"
  },
  {
    title: "Upcoming Events",
    value: "5",
    change: "This week",
    icon: Calendar,
    color: "text-primary"
  },
  {
    title: "Progress Rate",
    value: "89%",
    change: "+12% improvement",
    icon: TrendingUp,
    color: "text-green-500"
  }
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="glass-card p-6 hover-lift hover-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-xl bg-muted ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}