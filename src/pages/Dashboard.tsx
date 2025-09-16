import { motion } from "framer-motion"
import { DashboardStats } from "@/components/dashboard/DashboardStats"
import { UserProfile } from "@/components/dashboard/UserProfile"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, FileText, TrendingUp } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-8 overflow-hidden">
      {/* Welcome Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Welcome back, Dr. Jane Doe
        </h1>
        <p className="text-muted-foreground">
          Here's your academic overview for today
        </p>
      </motion.div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile (Desktop only) */}
        <div className="hidden lg:block lg:col-span-1">
          <UserProfile />
        </div>

        {/* Right Column - Recent Activities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Papers */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Recent Papers
                </h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Machine Learning in Academic Research", status: "Published", date: "2 days ago" },
                  { title: "Data Analysis Methodologies", status: "Under Review", date: "1 week ago" },
                  { title: "Statistical Computing Frameworks", status: "Draft", date: "2 weeks ago" }
                ].map((paper, index) => (
                  <motion.div
                    key={paper.title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-sm">{paper.title}</p>
                      <p className="text-xs text-muted-foreground">{paper.date}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      paper.status === "Published" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : paper.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                    }`}>
                      {paper.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Upcoming Schedule */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Today's Schedule
                </h3>
                <Button variant="ghost" size="sm">
                  View Calendar
                </Button>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Research Meeting", time: "10:00 AM", type: "Meeting" },
                  { title: "Data Analysis Workshop", time: "2:00 PM", type: "Workshop" },
                  { title: "Paper Review Deadline", time: "5:00 PM", type: "Deadline" }
                ].map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.type}</p>
                    </div>
                    <span className="text-sm font-medium text-primary">{event.time}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}