import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react"

const mockEvents = [
  {
    id: "1",
    title: "Research Group Meeting",
    type: "Meeting",
    date: "2024-03-20",
    time: "10:00 AM",
    duration: "1 hour",
    location: "Conference Room A",
    attendees: 8,
    description: "Weekly research group discussion and progress updates"
  },
  {
    id: "2",
    title: "Data Analysis Workshop",
    type: "Workshop",
    date: "2024-03-20",
    time: "2:00 PM",
    duration: "3 hours",
    location: "Lab 204",
    attendees: 15,
    description: "Hands-on workshop covering advanced statistical analysis techniques"
  },
  {
    id: "3",
    title: "Paper Review Deadline",
    type: "Deadline",
    date: "2024-03-20",
    time: "11:59 PM",
    duration: null,
    location: null,
    attendees: null,
    description: "Submit peer review for Journal of Academic Computing"
  },
  {
    id: "4",
    title: "Conference Presentation",
    type: "Presentation",
    date: "2024-03-21",
    time: "9:30 AM",
    duration: "30 minutes",
    location: "Main Auditorium",
    attendees: 150,
    description: "Presenting research findings on machine learning applications"
  }
]

const typeColors = {
  Meeting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Workshop: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Deadline: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Presentation: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
}

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const filteredEvents = mockEvents.filter(event => event.date === selectedDate)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Schedule & Calendar
            </h1>
            <p className="text-muted-foreground">
              Manage your academic appointments and deadlines
            </p>
          </div>
          <Button className="gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-lg glass-card border-0 bg-background text-foreground"
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
              className="glass-card"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                setSelectedDate(tomorrow.toISOString().split('T')[0])
              }}
              className="glass-card"
            >
              Tomorrow
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Selected Date Display */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-gradient">
          {formatDate(selectedDate)}
        </h2>
        <p className="text-muted-foreground mt-1">
          {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} scheduled
        </p>
      </motion.div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="glass-card p-6 hover-lift hover-glow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={typeColors[event.type as keyof typeof typeColors]}>
                          {event.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                          {event.duration && <span>• {event.duration}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    {event.attendees && (
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="hover-glow">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="hover-glow">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            No events scheduled for {formatDate(selectedDate)}
          </p>
          <Button className="gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Event
          </Button>
        </motion.div>
      )}
    </div>
  )
}