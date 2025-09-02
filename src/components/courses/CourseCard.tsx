import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Star, Users } from "lucide-react"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    progress: number
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    duration: string
    rating: number
    students: number
    image?: string
  }
  index: number
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="glass-card overflow-hidden hover-lift hover-glow group">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className={difficultyColors[course.difficulty]}>
              {course.difficulty}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1 text-sm text-white bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
            
            <Button 
              className="w-full gradient-primary hover:opacity-90 transition-opacity"
              size="sm"
            >
              {course.progress > 0 ? "Continue" : "Start Course"}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}