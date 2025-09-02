import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Clock, User, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface VideoTutorialCardProps {
  title: string
  instructor: string
  duration: string
  thumbnail: string
  level: "Beginner" | "Intermediate" | "Advanced"
  category: string
  videoId: string
  description?: string
}

export function VideoTutorialCard({
  title,
  instructor,
  duration,
  thumbnail,
  level,
  category,
  videoId,
  description
}: VideoTutorialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handlePlayVideo = () => {
    // In a real app, this would open a video player or redirect to YouTube
    window.open(`https://youtube.com/watch?v=${videoId}`, '_blank')
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="glass-card overflow-hidden hover-lift cursor-pointer group">
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              onClick={handlePlayVideo}
              className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black shadow-xl group-hover:shadow-2xl transition-all duration-300"
              size="icon"
            >
              <Play className="h-6 w-6 ml-1" fill="currentColor" />
            </Button>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-black/80 text-white border-0">
              <Clock className="h-3 w-3 mr-1" />
              {duration}
            </Badge>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="bg-white/90 text-black border-0">
              <BookOpen className="h-3 w-3 mr-1" />
              {category}
            </Badge>
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <Badge className={`${getLevelColor(level)} shrink-0`}>
              {level}
            </Badge>
          </div>

          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{instructor}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? "auto" : 0 
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <Button 
              onClick={handlePlayVideo}
              className="w-full gradient-primary hover:opacity-90 transition-opacity"
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Tutorial
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}